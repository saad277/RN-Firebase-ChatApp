import React, { useEffect, useState } from 'react'

import { StyleSheet, View, Text, Alert, SafeAreaView, Image, KeyboardAvoidingView } from 'react-native'

import Button from '../Components/Button'

import Strings from '../Const/Strings'

import EmailTextField from '../Components/EmailTextField'
import PasswordTextField from '../Components/PasswordTextField'

import Color from '../utils/Colors'
import Images from '../Const/Images'
import Constants from '../Const/Constants'
import DismissKeyboard from '../Components/DismissKeyboard'
import Utility from '../utils/Utility'

const SignUpScreen = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [isLoading, setLoading] = useState("")


    const validateEmail = () => {

        const isValidEmail = Utility.isEmailvalid(email)
        isValidEmail ? setEmailError("") : setEmailError(Strings.InvalidEmailAddress)
        return isValidEmail
    }

    const validatePassword = () => {

        const isValidPassword = Utility.isValidField(password)
        isValidPassword ? setPasswordError("") : setPasswordError(Strings.PasswordFieldEmpty)
        return isValidPassword;
    }


    return (
        <DismissKeyboard>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View>
                    <SafeAreaView>
                    <Image style={styles.logo} source={Images.logo}></Image>
                    
                    <EmailTextField
                    term={email}
                    error={emailError}
                    placeholder={Strings.EmailPlaceHolder}
                    OnTermChange={newEmail=>setEmail(newEmail)}
                    onValidateEmailAddress={validateEmail}
                    />
                    <PasswordTextField
                     term={password}
                     error={passwordError}
                     placeHolder={Strings.PasswordPlaceHolder}
                     onTermChange={newPassword=>setPassword(newPassword)} 
                     onValidatePasswordField={validatePassword}  
                    />

                    <Button title={Strings.Join} onPress={()=>{}} isLoading={isLoading} />

                    </SafeAreaView>
                </View>
            </KeyboardAvoidingView>
        </DismissKeyboard>
    )



}


const styles = StyleSheet.create({


    logo: {
        alignSelf: "center",
        margin: 0.04 * Constants.screenHeight,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.theme
    }

})



export default SignUpScreen;