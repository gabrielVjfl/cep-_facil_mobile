import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/components/Navbar.js'
import Form from './src/components/Form'
export default function App() {
  return (
    <View style={styles.container}>
        <Navbar/>
        <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
   
  },
});
