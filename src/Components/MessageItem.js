import React, { useEffect, useState } from 'react'

import { StyleSheet, View, Text, Alert, Image, TextInput } from 'react-native'

import Colors from '../utils/Colors'
import Utility from '../utils/Utility'
import Strings from '../Const/Strings'
import Images from '../Const/Images'
import Constants from '../Const/Constants'
import Button from '../Components/Button'


import ButtonWithBackground from '../Components/ButtonWithBackground'

import auth from '@react-native-firebase/auth'



const MessageItem = ({item}) => {

    const userId = auth().currentUser.uid

    const messageView = () => {

        if (userId == item.senderId) {

            return (
                <View style={styles.othersMessageContainerView}>
                    <Text style={[styles.senderName, { textAlign: "right" }]}>{item.senderEmail}</Text>
                    <Text style={[styles.message, { textAlign: "right" }]}>{item.message}</Text>
                </View>
            )

        } else {

            return (
                <View style={styles.myMessageContainerView}>
                    <Text style={[styles.senderName, ]}>{item.senderEmail}</Text>
                    <Text style={[styles.message, ]}>{item.message}</Text>
                </View>
            )
        }
    }


    return (

        messageView()
    )


}


const styles = StyleSheet.create({

    othersMessageContainerView: {

        width: Constants.screenWidth - 50,

        backgroundColor: Colors.gray,
        borderRadius: 5,
        marginLeft: 25,
        marginTop: 5,
        marginBottom: 5,
        padding: 10,

    },
    myMessageContainerView: {

        width: Constants.screenWidth - 50,
        backgroundColor: Colors.gray,
        borderRadius: 5,
        margin: 5,
        padding: 10,
    },
    senderName: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: "bold",
    },
    message: {
        color: Colors.white,
        fontSize: 14,
    }


})


export default MessageItem;