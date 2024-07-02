import {StyleSheet, Text, View} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Color from '../Shared/Color';
import CategoryTextSlider from '../Components/CategoryTextSlider';
import TopHeadLineSlider from '../Components/TopHeadLineSlider';

const Home = ()=>{
    return(
        <View>
            <View style={styles.container}>
                <Text style={styles.appName}>News Hunters</Text>
                <Ionicons name="notifications-outline" size={24} color="black" />
            </View>
            <CategoryTextSlider/>
            <TopHeadLineSlider/>
        </View>
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