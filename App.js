import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View} from 'react-native'
import Home from './App/Screen/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>rahul saini</Text>
      {/*<Home/>*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    paddingTop:20,
    justifyContent:'center',
    alignItems:'center'
  }
})