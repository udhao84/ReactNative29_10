import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

function verifi({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={{fontSize:22,fontWeight:'bold'}}>Enter your 4-digit code</Text>
        <Text style={{marginTop:25,}}>code </Text>
        <View style={{flexDirection:'row',borderBottomColor:'lightgray',borderBottomWidth:1,}}>
          <TextInput style={{height:60,width:'100%',}} placeholder='- - - -'>
            
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

export default verifi;