import React, { useEffect, useState } from 'react'

import { StyleSheet, View, Text, Alert, Image } from 'react-native'

import Colors from '../utils/Colors'
import Utility from '../utils/Utility'
import Strings from '../Const/Strings'
import Images from '../Const/Images'
import Constants from '../Const/Constants'




const GroupItems = ({ item }) => {


    return (
        <View>
            <View style={styles.container}>
                <Image
                    source={Images.groups}
                    style={styles.image}
                />
                <View style={{ justifyContent: "center" }} >

                    <Text style={styles.groupTitle}>{item.groupName}</Text>
                    <Text style={styles.groupMembers}></Text>
                </View>

            </View>

        </View>
    )


}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: "row",
        height: 50,
        width: Constants.screenWidth,
        margin: 10,
    },
    descriptionContainer: {

        margin: 5,
    },

    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        shadowColor: Colors.gray,
        shadowOffset: { height: 1, width: 1 },
        shadowRadius: 2,
        backgroundColor: Colors.theme
    },
    groupTitle: {
        color: Colors.gray,
        fontSize: 14,
        fontWeight: "bold",
        marginHorizontal: 10,
    },
    seperator: {

        height: 0.5,
        width: Constants.width,
        backgroundColor: Colors.theme
    },
    groupMembers: {
        color: Colors.smoke,
        fontSize: 14,
    }

})


export default GroupItems;