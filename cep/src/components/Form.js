import React from 'react'

import {View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput} from 'react-native'

import { Button } from 'react-native-elements';

import { Card,  ListItem} from 'react-native-elements'

import { Icon } from 'react-native-elements'

const Form = () => {
  
    return (
        <View>
       <TouchableHighlight>
       
    
    <TextInput
    style={{fontSize: 27, textAlign: 'center', width: '50%', height: 40,
alignItems: 'center', alignSelf: 'center', marginTop: 40, 
 color: 'white', border: 3, borderColor: 'red'}}
     placeholder="Digite o CEP" id="cep" name="cep" keyboardType="numeric"
    autoFocus="on" 
     ></TextInput>
       </TouchableHighlight>


<View style={{marginTop: "10"}}>
       <Button
  title="Consultar" // Don't forget this!
 
  style={{width: 150, marginTop: 150, justifyContent: "center",
  alignSelf: "center", }}
/>
</View>
<Card>
    <Text>Cidade</Text>
    <Text>UF</Text>
    <Text>Bairro</Text>
    <Text>Logradouro</Text>
</Card>


  
        </View>
    )
}


export default Form