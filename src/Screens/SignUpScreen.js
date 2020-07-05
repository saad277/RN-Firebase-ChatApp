import React from 'react'

import { StyleSheet, View, Text } from 'react-native'

import Button from '../Components/Button'

import Strings from '../Const/Strings'

import EmailTextField from '../Components/EmailTextField'

const SignUpScreen = () => {


    return (
        <View style={styles.container} >
            <Text style={styles.text}>Sign In</Text>
            <Button title={Strings.Join}></Button>
            <EmailTextField />
        </View>
    )



}


const styles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ebebeb"
    },
    text: {
        color: "#101010",
        fontSize: 25,
        fontWeight: "bold"
    }

})



export default SignUpScreen;