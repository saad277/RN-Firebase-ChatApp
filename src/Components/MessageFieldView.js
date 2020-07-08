import React, { useEffect, useState } from 'react'

import { StyleSheet, View, Text, Alert, Image, TextInput} from 'react-native'

import Colors from '../utils/Colors'
import Utility from '../utils/Utility'
import Strings from '../Const/Strings'
import Images from '../Const/Images'
import Constants from '../Const/Constants'
import Button from '../Components/Button'


import ButtonWithBackground from '../Components/ButtonWithBackground'






const MessageFieldView = ({ term, placeHolder, onTermChange, onValidateTextField, error, onSubmit, isJoined }) => {


    return (

        <View style={styles.containerView}>
            <View style={styles.fieldView}>
                <TextInput
                    autoCorrect={false}
                    style={styles.textField}
                    placeholder={placeHolder}
                    value={term}
                    onChange={onTermChange}
                    onEndEditing={onValidateTextField}
                />
            </View>
            <Button title={Strings.Send} color={Colors.white} />

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
        marginRight: 10,
        paddingLeft: 10,
        width: "75%",
        borderColor: Colors.gray,
        borderWidth: 1,
        justifyContent: "center",
        backgroundColor: Colors.smoke,

    },
    Button: {

        flex: 1,
        alignSelf: "center",
        width: "25%",
        height: "100%"
    }

})

export default MessageFieldView;