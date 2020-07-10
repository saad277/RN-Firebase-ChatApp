import React, { useEffect } from 'react'

import { StyleSheet, View, Text, Image } from 'react-native'

import Images from '../Const/Images'
import Constants from '../Const/Constants'
import Colors from '../utils/Colors'

import auth from '@react-native-firebase/auth'

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

            }, 1000)



        })



    }

    return (

        <View style={styles.container}>
            <Image style={styles.logo} source={Images.logo}></Image>
            <Text>assa</Text>
        </View>
    )

}


const styles = StyleSheet.create({

    logo: {
        alignSelf: "center",
        margin: Constants.screenHeight + 0.04
    },

    container: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.theme
    }

})


export default SplashScreen;