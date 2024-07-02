import { useEffect, useState } from "react"
import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from "react-native"
import GlobalApi from "./Services/GlobalApi"
import Color from "../Shared/Color"

const TopHeadLineSlider = ()=>{

    const [apiData, setApiData] = useState()
    useEffect(()=>{
        getTopHeadline()
    },[])

    const getTopHeadline = async()=>{
        let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=29337f0874714e63b8c7e29abe9c28a7'
        let result = await fetch(url)
        result = await result.json()
        setApiData(result.articles)
        //console.log(result.articles)
        console.log(result.totalResults)
        
    }
    return(
        <View style={{marginTop:10}}>
            <FlatList
                data={apiData}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=>(
                    item.urlToImage &&
                    <TouchableOpacity 
                    style={{width:Dimensions.get('screen').width*0.70,marginRight:10}}
                    >
                        <Image
                        source={{uri:item?.urlToImage}}
                        style={{height:Dimensions.get('screen').width*0.60,borderRadius:15}}
                        />
                        <Text numberOfLines={3} style={{fontWeight:'bold',fontSize:15}}>{item.title}</Text>
                        <Text style={{color:Color.primary}}>{item?.source?.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default TopHeadLineSlider