import React from 'react'
import { Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
const localImage = require('../../assets/images/myimage.webp');


export default function HomeScreen() {
  return(
    <View style={styles.container}>
      <Image 
  source={localImage} 
 // source={{ uri: 'https://dropinblog.net/34256781/files/featured/expo-vs-react-native.png' }} 
  style={{ width: 200, height: 200 }} 
/>

    <Text style={styles.title}>React Native Example</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Click me</Text>
      </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 50,
  },button:{
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },buttonText : {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  }

});