import { StyleSheet, TextInput, View, SafeAreaView, TouchableOpacity, Image, FlatList, ScrollViewBase, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import AppText from '../../components/AppText'
import Button from '../../components/Button'
import AppHeader from '../../components/AppHeader'
import Bg from '../../components/Bg'
import GradientWrapper from '../../components/GradientWrapper'
import { colors, constants } from '../../theme';
import { useTheme } from '@react-navigation/native'
import RBSheet from "react-native-raw-bottom-sheet";
import fonts from '../../theme/fonts'
import { showMessage } from 'react-native-flash-message'



export default function Index({ route, navigation }) {
    const item = route?.params?.item;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppHeader />
            <View style={styles.container}>
                <View style={{ alignSelf: 'flex-end', position: 'absolute', top: -50 }}>
                    <GradientWrapper size={65}>
                        <Image style={{ height: 30, width: 30, }} source={item.icon} resizeMode={"contain"} />
                    </GradientWrapper>
                </View>
                <View style={{ marginHorizontal: 5 }}>
                    <AppText fontSize={30}>{item?.name}</AppText>
                </View>
                <View style={{ marginTop: 15 }}>
                    <FlatList
                        data={item.groupItems || []}
                        keyExtractor={(item, index) => `${index}`}
                        renderItem={(group) => {
                            return (
                                <TouchableOpacity activeOpacity={0.8} style={{ margin: 10, marginHorizontal: 20 }} onPress={() => { navigation.navigate('SubOptions', group.item) }}>
                                    <Bg padding={10} style={{ borderRadius: 20, zIndex: -1 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <GradientWrapper>
                                                <Image style={{ height: 20, width: 20, }} source={group.item.icon} resizeMode={"contain"} />
                                            </GradientWrapper>
                                            <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 20 }}>
                                                <AppText fontSize={16}>{group.item.name}</AppText>
                                            </View>
                                        </View>
                                    </Bg>
                                </TouchableOpacity>

                            )
                        }
                        }
                    />

                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: constants.CONTAINER
    },
    popupMenu: {
        top: 0,
        position: "absolute",
        right: 5,
        top: 11,
        height: 120,
        width: 110,
        backgroundColor: colors.darkTheme.background,
        padding: 10,
        // backgroundColor: "#2D2D2D",
        zIndex: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        borderRadius: 10,
        // alignItems: 'center'

    },
    sheet: {
        justifyContent: 'center',
        marginHorizontal: 30
    }
})