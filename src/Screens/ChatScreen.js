import React, { useState, useEffect } from 'react'

import { StyleSheet, View, Text, TouchableOpacity, FlatList, KeyboardAvoidingView, Alert, Button } from 'react-native'

import MessageFieldView from '../Components/MessageFieldView'
import Constants from '../Const/Constants'
import Colors from '../utils/Colors'
import Strings from '../Const/Strings'
import DismissKeyboard from '../Components/DismissKeyboard'
import MessageItem from '../Components/MessageItem'

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const ChatScreen = () => {

    const [messageList, setMessageList] = useState([])
    const [message, setMessage] = useState("")
    const [isJoined, setJoined] = useState(false)

    // const {item}=route.params



    const userId = auth().currentUser.uid

    const getMessages = () => {

        let messages = []

        firestore().collection("message").doc(item.groupID).collection("message")
            .onSnapshot((snapshot) => {

                snapshot.docChanges().forEach((change) => {

                    if (change.type == "added") {

                        console.log("New Message", change.doc.data())
                        messages.push(change.doc.data())
                    }
                    if (change.type == "Modified") {

                        console.log("Modified Message", change.doc.data())
                    }
                    if (change.type === "removed") {

                        console.log("Removed Message", change.doc.data())
                    }

                })

            })

    }

    useEffect(() => {


    })

    return (
        <DismissKeyboard>
            <KeyboardAvoidingView styles={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
                behavior="padding"
                enabled keyboardVerticalOffset={100}>

                <View style={styles.container}>
                    <FlatList
                        style={styles.flatList}
                        data={messageList}
                        keyExtractor={(item, index) => "key" + index}
                        renderItem={({ item }) => {

                            return (

                                <TouchableOpacity onPress={() => { }}>
                                    <MessageItem item={item} />
                                </TouchableOpacity>
                            )
                        }}

                    />

                    <View style={styles.MessageFieldView}>
                        <MessageFieldView
                            term={message}
                            placeHolder={Strings.typeYourMessage}
                            onTermChange={(message) => setMessage(message)}
                            onSubmit={() => { }}

                        >

                        </MessageFieldView>
                    </View>
                </View>

            </KeyboardAvoidingView>
        </DismissKeyboard>
    )



}


const styles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

        flexDirection: "column",

    },
    flatList: {

        marginBottom: 10,
        flex: 0.9,
    },

    MessageFieldView: {
        flex: 0.1,

    }

})


export default ChatScreen;