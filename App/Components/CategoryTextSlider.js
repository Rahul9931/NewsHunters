import { useEffect, useState } from "react"
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Color from "../Shared/Color"

const CategoryTextSlider =({ selectCategory, activeCategory })=>{
    const [active, setActive] = useState(1)
    const categoryList = [
        {
            id:1,
            name:'General'
        },
        {
            id:2,
            name:'Health'
        },
        {
            id:3,
            name:'Business'
        },
        {
            id:4,
            name:'Sports'
        },
        {
            id:5,
            name:'Science'
        },
        {
            id:6,
            name:'Entertainment'
        },
        
    ]
    const onCategoryClick = (id, name) => {
        selectCategory(name, id);
      };
    return(
        <View style={{marginTop:10}}> 
            <FlatList
                data={categoryList}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>onCategoryClick(item.id, item.name)}>
                        <Text style={item.id === activeCategory?styles.selectedText:styles.unSelectedText}>{item.name}</Text>
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