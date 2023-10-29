import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

function Splash({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('onboard')}> 
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
      <Image style={styles.carrot} source = {require('../assets/carrot.png')}/>
      <Image style={styles.text} source = {require('../assets/text.png')}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'lightgray',
    backgroundColor: '#53B175' ,
  },
  carrot:{
    height:60,
    width:60,
    top:'50%',
    left:'17%',
    position:'absolute',
  },
  text:{
    position:'absolute',
    height:60,
    width:190,
    top:'50%',
    left:'35%',
  },
  button:{
    height:60,
    width:60,
    top:'90%',
    left:'80%',
    position:'absolute',
  },
});

export default Splash;