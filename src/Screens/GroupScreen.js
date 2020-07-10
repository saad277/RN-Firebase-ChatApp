import React, { useLayoutEffect, useEffect, useState } from 'react'

import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert, Group,RefreshControl } from 'react-native'

import ButtonWithBackground from '../Components/ButtonWithBackground'

import Images from '../Const/Images'
import GroupItems from '../Components/GroupItems'

import firestore from '@react-native-firebase/firestore'

const GroupScreen = ({ navigation }) => {


    const [groups, setGroups] = useState([])

    const [isFetching, setFetching] = useState(false)

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

        getChats()

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
                        onPress={() => { }}
                        image={Images.logout}
                    />
                )

            }
        })
    })

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


export default GroupScreen;