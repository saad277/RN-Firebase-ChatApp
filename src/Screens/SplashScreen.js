import React, { useEffect } from 'react'

import { StyleSheet, View, Text, Image } from 'react-native'

import Images from '../Const/Images'
import Constants from '../Const/Constants'
import Colors from '../utils/Colors'

import auth from '@react-native-firebase/auth'

import LottieView from 'lottie-react-native'

const SplashScreen = ({ navigation }) => {


    useEffect(() => {


        navigateToAuthOrGroupScreen()

    })

    const navigateToAuthOrGroupScreen = () => {

        const { currentUser } = auth();

        auth().onAuthStateChanged((user) => {

            setTimeout(() => {

                if (user != null) {

                    navigation.reset({

                        index: 0,
                        routes: [{ name: "GroupScreen" }]
                    })

                } else {

                    navigation.reset({

                        index: 0,
                        routes: [{ name: "SignInScreen" }]
                    })

                }

            }, 2500)



        })



    }

    return (

        <View style={styles.container}>

            <View style={styles.lottieView}>
                <LottieView source={require("../../assets/chat-button.json")} autoPlay={true} loop={true}></LottieView>
            </View>
            
            
        </View>
    )

}


const styles = StyleSheet.create({

    logo: {
        alignSelf: "center",
        margin: Constants.screenHeight + 0.04
    },
    
    lottieView:{

        width:"100%",
        height:0.6*Constants.screenHeight,
    },

    container: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.theme
    }

})


export default SplashScreen;