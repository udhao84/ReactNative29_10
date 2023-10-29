import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

function Splash({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.im} source = {require('../assets/background.png')}/>
      <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('Login')}> 
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  im:{
    height:'100%',
    width:'100%',
    resizeMode:'stretch',
    
  },
  button:{
    height:47,
    width:320,
    position:'absolute',
    top:'83%',
    backgroundColor:'#53B175' ,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:12,
  },
  buttonText:{
    color:'white',
    fontWeight:'bold',
  },
});

export default Splash;