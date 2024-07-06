import { createStackNavigator } from "@react-navigation/stack"
import Home from "../Screen/Home"
import ReadNews from "../Screen/ReadNews"

const Stack = createStackNavigator()
const HomeNavigator = ()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='home' component={Home}/>
            <Stack.Screen name='read_news' component={ReadNews}/>
        </Stack.Navigator>
    )
}

export default HomeNavigator