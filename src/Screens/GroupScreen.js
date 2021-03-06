import React, { useLayoutEffect, useEffect, useState } from 'react'

import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert, Group, RefreshControl } from 'react-native'

import ButtonWithBackground from '../Components/ButtonWithBackground'

import Images from '../Const/Images'
import GroupItems from '../Components/GroupItems'

import firestore from '@react-native-firebase/firestore'
import auth from "@react-native-firebase/auth"

import LottieView from 'lottie-react-native'


const GroupScreen = ({ navigation }) => {


    const [groups, setGroups] = useState([])

    const [isFetching, setFetching] = useState(true)

    const onRefresh = () => {

        setFetching(true)
        getChats();
    }



    const getChats = () => {

        let groupArray = []

        firestore().collection("groups").onSnapshot((snapshot) => {

            snapshot.docChanges().forEach((change) => {

                if (change.type == "added") {

                    console.log("New Group", change.doc.data())
                    console.log("added")
                    groupArray.push(change.doc.data())

                    setFetching(false)
                }

                if (change.type == "modified") {

                    console.log("Removed Group", change.doc.data())
                }

                if (change.type == "removed") {

                    console.log("Removed Group", change.doc.data())
                }

                setGroups(groupArray)
                setFetching(false)

            })

        })


    }

    useEffect(() => {



        setTimeout(() => {

            getChats()
            setFetching(false)

        }, 3500)

    }, [])


    useLayoutEffect(() => {

        navigation.setOptions({
            headerRight: () => {

                return (
                    <ButtonWithBackground
                        onPress={() => navigation.navigate("Add Group Screen")}
                        image={Images.add}
                    />
                )

            },
            headerLeft: () => {

                return (
                    <ButtonWithBackground
                        onPress={() => signOutUser()}
                        image={Images.logout}
                    />
                )

            }
        })
    })

    const signOutUser = async () => {


        try {

            await auth().signOut()

            navigation.reset({
                index: 0,
                routes: [{ name: "SplashScreen" }]
            })
        } catch (error) {


        }

    }

    const groupView = () => {

        return (
            <View style={styles.container} >
                <FlatList
                    data={groups}
                    keyExtractor={(item, index) => "key" + index}
                    onRefresh={() => onRefresh()}
                    refreshing={isFetching}
                    renderItem={({ item }) => {

                        return (
                            <TouchableOpacity onPress={() => navigation.navigate("ChatScreen", { item })}>
                                <GroupItems item={item} />
                            </TouchableOpacity>
                        )

                    }}

                >

                </FlatList>
            </View>)


    }

    const lottieView = () => {


        return (
            <View style={styles.container}>
                <LottieView source={require("../../assets/football.json")} autoPlay loop ></LottieView>
            </View>
        )
    }

    return (

        isFetching ? lottieView():groupView()  

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


export default GroupScreen;