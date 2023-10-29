import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button,Image, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.im} source = {require('../assets/login.png')}/>
      <View style={{padding:20}}>
        <Text style={{fontSize:22,fontWeight:'bold'}}>Get your groceries </Text>
        <Text style={{fontSize:22,fontWeight:'bold'}}>with nectar</Text>
        <View style={{flexDirection:'row',borderBottomColor:'lightgray',borderBottomWidth:1,}}>
          <Image style={styles.logo} source = {require('../assets/logo.png')}/>
          <TouchableOpacity style={{height:60,width:'100%',marginLeft:14}} onPress={() => navigation.navigate('number')}>
            <Text style={{marginTop:19,fontSize:18}}>+880</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:'gray',padding:25,}}>or connect with social media</Text>
          <TouchableOpacity style={[styles.button,{backgroundColor: '#5383EC',}]}> 
            <Image style={styles.icon} source = {require('../assets/gg.png')}/>
            <Text style={styles.buttonText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button,{backgroundColor: '#4A66AC',}]}> 
            <Image style={styles.icon} source = {require('../assets/fb.png')}/>
            <Text style={styles.buttonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  im:{
    height:'40%',
    width:'100%',
  },
  logo:{
    height:27,
    width:40,
    borderRadius:5,
    marginTop:16,
  },
  button:{
    height:60,
    width:'90%',
    borderRadius:18,
    alignItems:'center',
    marginBottom:20,
    flexDirection:'row',
  },
  buttonText:{
    color:'white',
    fontSize:16,
    marginLeft:30,
  },
  icon:{
    height:22,
    width:22,
    borderRadius:5,
    marginLeft:30,
  },
});

export default LoginScreen;