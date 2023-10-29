import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

function Splash({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={{fontSize:22,fontWeight:'bold'}}>Enter your mobile number </Text>
        <Text style={{marginTop:25,}}>mobile number </Text>
        <View style={{flexDirection:'row',borderBottomColor:'lightgray',borderBottomWidth:1,}}>
          <Image style={styles.logo} source = {require('../assets/logo.png')}/>
          <Text style={{marginTop:19,fontSize:18,marginLeft:14}}>+880</Text>
          <TextInput style={{height:60,width:'100%',}} onPress={() => navigation.navigate('verify')}>
          </TextInput>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('verify')}>
          <Image style={styles.next} source = {require('../assets/arrow.png')}/>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
  },
  logo:{
    height:27,
    width:40,
    borderRadius:5,
    marginTop:16,
  },
   next:{
    height:60,
    width:60,
    borderRadius:100000000000000000000000,
    marginTop:'50%',
    marginLeft:'85%',
   },
});

export default Splash;