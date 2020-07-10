import React, { useEffect, useState } from 'react'

import { StyleSheet, View, Text, Alert, Image, TextInput,Button} from 'react-native'

import Colors from '../utils/Colors'
import Utility from '../utils/Utility'
import Strings from '../Const/Strings'
import Images from '../Const/Images'
import Constants from '../Const/Constants'










const MessageFieldView = ({ term, placeHolder, onTermChange, onValidateTextField, error, onSubmit, isJoined }) => {


    return (

        <View style={styles.containerView}>
            <View style={styles.fieldView}>
                <TextInput
                    autoCorrect={false}
                    style={styles.textField}
                    placeholder={placeHolder}
                    value={term}
                    onChangeText={onTermChange}
                    onEndEditing={onValidateTextField}
                />

                <Button title={Strings.Send} color={Colors.uaStudiosGreen} style={styles.button} onPress={onSubmit}/>
            </View>
            

        </View>
    )



}


const styles = StyleSheet.create({


    containerView: {

        backgroundColor: Colors.white,
        width: Constants.screenWidth,
        flex: 1,
        justifyContent: "space-between",
     
    },
    fieldView: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: Colors.uaStudiosGreen
    },
    textField: {
        fontSize: 14,
        flex:1,
        marginRight: 10,
        paddingLeft: 10,
        width: "75%",
        borderColor: Colors.gray,
        borderWidth: 1,
        justifyContent: "center",
        backgroundColor: Colors.smoke,

    },
    button: {

        flex: 1,
        alignSelf: "center",
        width: "75%",
        height: "100%"
    }

})

export default MessageFieldView;