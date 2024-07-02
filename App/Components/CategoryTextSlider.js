import { useState } from "react"
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Color from "../Shared/Color"

const CategoryTextSlider =()=>{
    const [active, setActive] = useState(1)
    const categoryList = [
        {
            id:1,
            name:'Latest'
        },
        {
            id:2,
            name:'World'
        },
        {
            id:3,
            name:'Bussiness'
        },
        {
            id:4,
            name:'Sport'
        },
        {
            id:5,
            name:'Life'
        },
        {
            id:6,
            name:'Movie'
        },
        
    ]
    function onCategoryClick(id){
        setActive(id)
    }
    return(
        <View style={{marginTop:10}}> 
            <FlatList
                data={categoryList}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>{onCategoryClick(item.id)}}>
                        <Text style={item.id==active?styles.selectedText:styles.unSelectedText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    unSelectedText:{
        marginRight:20,
        fontSize:15,
        fontWeight:"bold"
    },
    selectedText:{
        marginRight:20,
        fontSize:15,
        fontWeight:"bold",
        color:Color.primary
    }
})
export default CategoryTextSlider