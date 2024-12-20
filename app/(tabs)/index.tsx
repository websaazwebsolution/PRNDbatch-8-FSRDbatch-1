import React from 'react'
import { SafeAreaView , Image , StyleSheet, Platform, TouchableOpacity, ScrollView , FlatList, Button, BackHandler } from 'react-native';
import { Text, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
const localImage = require('../../assets/images/myimage.webp');


import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  
  return(
        <ScrollView style={styles.container}>
            {/* header Section */}
            <View style={styles.header}>
                <Text style={styles.headertitle}>Welcome to My App</Text>
                <MaterialIcons name="menu" size={30} color="white"></MaterialIcons>
            </View>
            {/* banner section */}
            <View style={styles.bannerContainer}>
              <Image style={styles.bannerimage} source={{ uri:'https://www.ropstam.com/wp-content/uploads/2024/05/React-native-apps.jpg'}}  />
            </View>
            {/* icon Box section */}
            <View style={styles.iconBoxContainer}>
                  <TouchableOpacity style={styles.iconBox}>
                      <MaterialIcons name="home" size={50} color="#2196f3"></MaterialIcons>
                      <Text style={styles.iconBoxText}>Home</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.iconBox}>
                      <MaterialIcons name="person" size={50} color="#2196f3"></MaterialIcons>
                      <Text style={styles.iconBoxText}>Profile</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.iconBox}>
                      <MaterialIcons name="settings" size={50} color="#2196f3"></MaterialIcons>
                      <Text style={styles.iconBoxText}>Settings</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.iconBox}>
                      <MaterialIcons name="info" size={50} color="#2196f3"></MaterialIcons>
                      <Text style={styles.iconBoxText}>About</Text>
                  </TouchableOpacity>
            </View>
            {/* Features section */}
            <View style={styles.featuresSection}>
              <Text style={styles.featuresTitle}>Popular Features</Text>

              <ScrollView style={styles.featuresContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={styles.featureCard}>
                      <MaterialIcons name="star" size={50} color="#2196f3"></MaterialIcons>
                      <Text style={styles.featureText}>Fauture 1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.featureCard}>
                      <MaterialIcons name="flash-on" size={50} color="#2196f3"></MaterialIcons>
                      <Text style={styles.featureText}>Fauture 2</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.featureCard}>
                      <MaterialIcons name="build" size={50} color="#2196f3"></MaterialIcons>
                      <Text style={styles.featureText}>Fauture 3</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.featureCard}>
                      <MaterialIcons name="build" size={50} color="#2196f3"></MaterialIcons>
                      <Text style={styles.featureText}>Fauture 3</Text>
                  </TouchableOpacity>
              </ScrollView>
            </View>
            {/* Testimonials section */}
            <View style={styles.testimonialsSection}>
              <Text style={styles.testimonialsTitle}>Waht people Say</Text>
              <View style={styles.testimonialsCard}>
                 <Text style={styles.testimonialsText}>
                    This app has completly chage the way i manage my daily tasks.
                 </Text>
              </View> 
              <View style={styles.testimonialsCard}>
                 <Text style={styles.testimonialsText}>
                    This app has completly chage the way i manage my daily tasks.
                 </Text>
              </View> 
              <View style={styles.testimonialsCard}>
                 <Text style={styles.testimonialsText}>
                    This app has completly chage the way i manage my daily tasks.
                 </Text>
              </View> 
            </View>
        </ScrollView>

  )


}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff',
  
  },header:{
      padding:30,
      backgroundColor: '#6200EA',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  },headertitle:{
    color:'white',
    fontSize: 24,
    fontWeight: 'bold',
  },bannerContainer:{
    margin: 10,
    height: 200,
    backgroundColor: '#f5f5f5',
  },bannerimage : {
   width:'100%',
   height:'100%',
  },iconBoxContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },iconBox:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    width:80,
    height: 80,
    borderRadius: 10,
    elevation:5,
  },iconBoxText:{
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color:'#333333'
  },featuresSection:{
    padding: 20,
    backgroundColor: '#f5f5f5',
    marginVertical: 20,
  },featuresTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginLeft: 20,
    marginBottom: 20,
  },featureCard:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    width:120,
    height: 120,
    borderRadius: 10,
    marginHorizontal: 10,
    elevation:5,
  },featuresContainer:{
    paddingHorizontal: 30,
  },featureText:{
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color:'#333333',
    textAlign:'center'
  },testimonialsSection:{
     marginVertical: 20,
     paddingHorizontal: 20,
  },testimonialsTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginLeft: 20,
    marginBottom: 20,
  },testimonialsCard:{
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation:5,
  },testimonialsText:{
    fontSize: 18,
    fontStyle: 'italic',
    color: '#555555',
  }


  // title: {
  //   fontSize: 50,
  //   fontWeight: 'bold',
  //   color: '#333333',
  //   marginBottom: 50,
  // },button:{
  //   backgroundColor: '#000000',
  //   padding: 10,
  //   borderRadius: 5,
  //   alignItems: 'center',
  // },buttonText : {
  //   color: '#ffffff',
  //   fontSize: 16,
  //   fontWeight: 'bold',
  // }
// <SafeAreaView style={{flex: 1}}>
//       <Text>thsi is my react app</Text>
//     </SafeAreaView>
//   return(
//     <View style={styles.container}>
//       <Image 
//   source={localImage} 
//  // source={{ uri: 'https://dropinblog.net/34256781/files/featured/expo-vs-react-native.png' }} 
//   style={{ width: 200, height: 200 }} 
// />

//     <Text style={styles.title}>React Native Example</Text>

//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Click me</Text>
//       </TouchableOpacity>

//     </View>
//   )
});