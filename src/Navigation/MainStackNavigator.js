import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SplashScreen from '../Screens/SplashScreen'
import SignUpScreen from '../Screens/SignUpScreen'
import GroupScreen from '../Screens/GroupScreen'
import AddGroupScreen from '../Screens/AddGroupScreen'
import ChatScreen from '../Screens/ChatScreen'


const Stack = createStackNavigator()

const ChatFlow = () => {

    return (

        <NavigationContainer>
            <Stack.Navigator name="chat">

                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="SignInScreen"
                    component={SignUpScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="GroupScreen"
                    component={GroupScreen}
                    options={{ title: "Groups" }}
                />

                <Stack.Screen
                    name="Add Group Screen"
                    component={AddGroupScreen}
                    options={{ title: "Add Group" }}
                />

                <Stack.Screen
                    name="ChatScreen"
                    component={ChatScreen}
                    options={{ title: "Chat" }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )



}


const MainStackNavigator = () => {

    return (

        ChatFlow()
    )

}

export default MainStackNavigator;