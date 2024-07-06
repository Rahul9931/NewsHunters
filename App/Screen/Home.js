import {ActivityIndicator, Dimensions, StyleSheet, Text, View} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Color from '../Shared/Color';
import CategoryTextSlider from '../Components/CategoryTextSlider';
import TopHeadLineSlider from '../Components/TopHeadLineSlider';
import HeadLineList from '../Components/HeadLineList';
import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-virtualized-view'
import GlobalApi from '../Services/GlobalApi';

const Home = ()=>{
    const [apiData, setApiData] = useState()
    const [activeCategory, setActiveCategory] = useState(1);
    const [loading, setLoading] = useState(true)
    let count = 0
    useEffect(()=>{
        getNewsByCategory('Entertainment')
        count++
        console.log(`count = ${count}`)

    },[])
    
    const getNewsByCategory = async(category)=>{
        setLoading(true)
        let result =  await GlobalApi.getByCategory(category)
        result = await result.json()
        //console.log(result.articles)
        console.log(result.totalResults)
        setApiData(result.articles)
        setLoading(false)
        
    }
    const handleCategoryChange = (category, id) => {
        setActiveCategory(id);
        getNewsByCategory(category);
      };

    return(
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'white'}}>
            <View style={styles.container}>
                <Text style={styles.appName}>News Hunters</Text>
            </View>
            <CategoryTextSlider 
            selectCategory={handleCategoryChange} 
            activeCategory={activeCategory}
            />
            {loading?<ActivityIndicator
                style={{marginTop:Dimensions.get('screen').height*0.35}}
                color={Color.primary}
                size={'large'}
            />:
            <View>
            <TopHeadLineSlider apiData={apiData}/>
            <HeadLineList apiData={apiData}/>
            </View>}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        

        
    },
    appName:{
        fontSize:20,
        color:Color.primary,
        fontWeight:'bold'
    }
})

export default Home