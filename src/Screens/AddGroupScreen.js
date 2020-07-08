import React, { useEffect, useState } from 'react'

import { StyleSheet, View, Text, Alert } from 'react-native'

import CustomTextField from '../Components/CustomTextField'
import Button from '../Components/Button'
import Colors from '../utils/Colors'
import Utility from '../utils/Utility'
import Strings from '../Const/Strings'

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const AddGroupScreen = ({ navigation }) => {

    const [groupName, setGroup] = useState("")
    const [fieldError, setFieldError] = useState("")
    const [isLoading, setLoading] = useState(false)


    const validateField = () => {

        const isValid = Utility.isValidField(groupName)
        isValid ? setFieldError("") : setFieldError(Strings.GroupNameEmpty)
        return isValid

    }

    const createGroup = () => {

        setLoading(true)

        const groupRef = firestore().collection("groups").doc()
        const userID = auth().currentUser.uid

        groupRef.set({

            groupID: groupRef.id,
            groupName: groupName,
            userID: userID

        }).then((docRef) => {

            console.log("Document created at " + groupRef.id)
            setLoading(false)

            addMembersToGroupChat(groupRef.id, userID)

        }).catch((error) => {

            console.log(error)
            setLoading(false)

        })
    }


    const addMembersToGroupChat = (groupId, userId) => {

        const membersRef = firestore().collection("members").doc(groupId).collection("member").doc()

        membersRef.set({

            userID: userId,

        }).then(() => {

            navigation.goBack()
        })
            .catch((error) => {

                setLoading(false)
            })

    }

    const performCreateGroup = () => {

        const isValid = validateField()

        if (isValid) {

            createGroup()
        }
    }


    return (
        <View style={styles.container} >
            <CustomTextField
                term={groupName}
                error={fieldError}
                placeHolder={Strings.EnterYourGroupName}
                onTermChange={(newGroupName) => setGroup(newGroupName)}
                onValidateTextField={validateField}
            />
            <Button title={Strings.CreateGroup} onPress={performCreateGroup} isLoading={isLoading} />


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

export default AddGroupScreen;