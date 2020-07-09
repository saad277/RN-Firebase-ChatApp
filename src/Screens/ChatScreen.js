import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, FlatList, KeyboardAvoidingView, Alert } from 'react-native'

import Strings from '../Const/Strings'
import DismissKeyboard from '../Components/DismissKeyboard'
import MessageItem from '../Components/MessageItem'
import MessageFieldView from '../Components/MessageFieldView'


import auth from '@react-native-firebase/auth'
import firestore from "@react-native-firebase/firestore"


const ChatScreen = ({ route, navigation }) => {


    const [messageList, setMessageList] = useState([])
    const [message, setMessage] = useState('')
    
    const [isJoined, setIsJoined] = useState(false)

    const { item } = route.params
    const userID = auth().currentUser.uid

    useEffect(() => {
        console.log(item)

        getMessages()
    }, [])







    function getMessages() {
       
        var messages = []

        firestore().collection("message").doc(item.groupID).collection("messages")
            .onSnapshot(function (snapshot) {
                snapshot.docChanges().forEach(function (change) {
                    if (change.type === "added") {
                        console.log("New Message: ", change.doc.data())
                        messages.push(change.doc.data())

                    }
                    if (change.type === "modified") {
                        console.log("Modified Message", change.doc.data())
                    }
                    if (change.type === "removed") {
                        console.log("Removed Message:", change.doc.data())
                    }
                    setMessageList(messages)
                })
            })
    }


    const sendMessagesToChat = () => {

        const messageRef = firestore().collection("message").doc(item.groupID).collection("messages").doc()
        const userEmail = auth().currentUser.email

        messageRef.set({
            messageId: messageRef.id,
            message: message,
            senderId: userID,
            senderEmail: userEmail

        }).then(() => {

            console.log("Document ref " + messageRef.id)
            setMessage("")

        }).catch((error) => {

            Alert.alert(error.message)
        })
    }



    return (
        <DismissKeyboard>
            <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }}
                behavior="padding" enabled keyboardVerticalOffset={100}>
                <View style={styles.container}>
                    <FlatList
                        style={styles.flatList}
                        data={messageList}
                        keyExtractor={(item, index) => 'key' + index}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => {

                                }}>

                                    <MessageItem item={item} />
                                </TouchableOpacity>
                            )
                        }}
                    />

                    <View style={styles.messageFieldView}>
                        <MessageFieldView term={message}
                            placeHolder={Strings.typeYourMessage}
                            onTermChange={message => setMessage(message)}
                            onSubmit={sendMessagesToChat}
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    flatList: {
        marginBottom: 10,
        flex: 0.9,
    },
    messageFieldView: {
        flex: 0.1
    }
})

export default ChatScreen