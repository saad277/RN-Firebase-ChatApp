import React,{useState,useEffect} from 'react'

import { StyleSheet, View, Text,TouchableOpacity,FlatList,KeyboardAvoidingView,Alert,Button } from 'react-native'

import MessageFieldView from '../Components/MessageFieldView'
import Constants from '../Const/Constants'
import Colors from '../utils/Colors'
import Strings from '../Const/Strings'
import DismissKeyboard from '../Components/DismissKeyboard'
import MessageItem from '../Components/MessageItem'


const ChatScreen = () => {


    return (
        <View style={styles.container} >
            <Text style={styles.text}>Chat Screen</Text>
        </View>
    )



}


const styles=StyleSheet.create({


    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#ebebeb"
    },
    text:{
        color:"#101010",
        fontSize:25,
        fontWeight:"bold"
    }

})


export default ChatScreen;