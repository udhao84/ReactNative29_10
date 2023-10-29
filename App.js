import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {SafeAreaView,StyleSheet,View,Text,Image,Button,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Screen/signin';
import splash from './Screen/splash';
import onboard from './Screen/onboard';
import number from './Screen/number';
import verify from './Screen/verifi';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="splash">
          <Stack.Screen name="splash" component={splash} options={{ headerShown: false }}/>
          <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>  
          <Stack.Screen name="onboard" component={onboard}  options={{ headerShown: false }}/> 
          <Stack.Screen name="number" component={number}/> 
          <Stack.Screen name="verify" component={verify}/> 
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#53B175' ,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
