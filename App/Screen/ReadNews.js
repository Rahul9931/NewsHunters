import { useNavigation, useRoute } from "@react-navigation/native"
import { View, Text, Image, Dimensions, TouchableOpacity, Share } from "react-native"
import Color from "../Shared/Color"
import AntDesign from '@expo/vector-icons/AntDesign';
import { Entypo } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { ScrollView } from "react-native-virtualized-view";

const ReadNews = ()=>{
    const news = useRoute().params.news
    const navigation = useNavigation()
    const ShareNews = ()=>{
        Share.share({
            message:news.title+"\nRead More"
        })
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,backgroundColor:'white'}}>
            <View style={{marginTop:15, display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableOpacity 
                    onPress={()=>navigation.goBack()}
                >
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>ShareNews()}>
                    <Entypo name="share" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Image 
                source={{uri:news.urlToImage}}
                style={{marginTop:10, height:Dimensions.get('screen').height*0.35, width:'100%',borderRadius:10}}
                />
            <Text numberOfLines={3} style={{fontWeight:'bold',marginTop:10}}>{news.title}</Text>
            <Text style={{color:Color.primary, fontWeight:'bold'}}>{news.source.name}</Text>
            <Text style={{fontWeight:'bold', lineHeight:25, marginTop:15}}>{news.description}</Text>
            <TouchableOpacity
            onPress={()=>WebBrowser.openBrowserAsync(news.url)}
            >
            <Text style={{color:Color.primary, fontWeight:'bold', marginTop:10}}>Read More</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default ReadNews