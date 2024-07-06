import { StatusBar } from 'expo-status-bar'
import {React} from 'react'
import { SafeAreaView, StyleSheet, Text, View} from 'react-native'
import Home from './App/Screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './App/Navigations/HomeNavigator';
import GlobalApi from './App/Services/GlobalApi';
import { useEffect } from 'react';

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <View style={{flex:1, backgroundColor:'white', padding:15, marginTop:10}}>
        <HomeNavigator/>
        </View>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
})