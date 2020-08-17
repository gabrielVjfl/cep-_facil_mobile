import React from 'react'

import {View, Text, Image, StyleSheet} from 'react-native'

const Navbar = () => {
    return (
        <View style={Styles.nav}>

       <Image source={require('../img/logo1.png')}
       style={{height: 110, width: 120, justifyContent: 'center',
       alignContent: "center", alignSelf: "center"
       }}
       
       ></Image>
        </View>
    )
}

const Styles = StyleSheet.create({
    nav: {
     backgroundColor: 'white',
     width: '100%',
     height: 110,
     

    }
})
export default Navbar  