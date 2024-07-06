import { FlatList, Image, TouchableOpacity, View, Text, StyleSheet } from "react-native"
import Color from "../Shared/Color"
import { useNavigation } from "@react-navigation/native"

const HeadLineList = ({apiData})=>{

    const navigation = useNavigation()
    const reversedData = [...apiData].reverse()
    return(
        <View style={{marginTop:10}}>
            <FlatList
                data={reversedData}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=>(
                    item.urlToImage &&
                    <View>
                        <View style={{height:1, backgroundColor:'lightgrey', marginTop:10}}></View>
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate('read_news',{news:item})}
                    style={{marginTop:10, flexDirection:'row'}}>
                        <Image 
                        source={{uri:item.urlToImage}}
                        style={{height:100, width:100, borderRadius:10}}
                        />
                        <View style={{padding:5}}> 
                            <Text style={styles.textStyle} numberOfLines={3}>{item.title}</Text>
                            <Text style={{color:Color.primary, marginTop:10}}>{item?.source?.name}</Text>
                        </View>
                    </TouchableOpacity>
                    
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontWeight:'bold'
    }
})

export default HeadLineList