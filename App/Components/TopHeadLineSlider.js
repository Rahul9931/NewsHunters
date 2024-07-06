import { useEffect, useState } from "react"
import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from "react-native"
import Color from "../Shared/Color"
import { useNavigation } from "@react-navigation/native"

const TopHeadLineSlider = ({apiData})=>{

    const navigation = useNavigation()

    return(
        <View style={{marginTop:10}}>
            <FlatList
                data={apiData}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=>(
                    item.urlToImage &&
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate('read_news',{news:item})}
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