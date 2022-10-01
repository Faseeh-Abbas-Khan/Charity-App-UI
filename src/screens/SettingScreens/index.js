import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import AppText from '../../components/AppText'
import AppHeader from '../../components/AppHeader'
import Bg from '../../components/Bg'
import { constants } from '../../theme'
import { useTheme } from '@react-navigation/native'


export default function Index({ navigation }) {

    const { colors } = useTheme()
    const Settings = [
        {
            name: 'Account Info',
            Icon: require('../../assets/AccountInfo.png'),
        },
        {
            name: 'History',
            Icon: require('../../assets/History.png'),
        },
        {
            name: 'Payment Info',
            Icon: require('../../assets/paymentInfo.png'),
        },
        {
            name: 'Appearance',
            Icon: require('../../assets/appearence.png'),
        },
        {
            name: 'About us',
            Icon: require('../../assets/about.png'),
        },
        {
            name: 'How it works',
            Icon: require('../../assets/howitworks.png'),
        },
        {
            name: 'Logout',
            Icon: require('../../assets/logout.png')
        },
    ]

    const handelNavigation = (name) => {
        console.log(name)
        if (name !== 'Logout') {
            navigation.navigate(`${name}`)
        }
        else {
            navigation.navigate('Auth')
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppHeader />
            <View style={styles.container}>
                <View style={{ marginHorizontal: 20 }}>
                    <AppText fontSize={30}>Settings</AppText>
                </View>
                <View>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => `${index}`}
                        data={Settings}
                        style={{ paddingHorizontal: 20, marginVertical: 20 }}
                        renderItem={({ item }) => {
                            return (
                                <Bg padding={10} style={{ flex: 1, borderRadius: 15, height: 48, justifyContent: 'center', marginVertical: 10 }}>
                                    <TouchableOpacity activeOpacity={.9} onPress={() => {
                                        handelNavigation(item.name)
                                    }}
                                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 5 }}>
                                            <Image source={item.Icon} style={{ height: 20, width: 20 }} resizeMode={"contain"} />
                                        </View>

                                        <View style={{ flex: 1, marginHorizontal: 10 }}>
                                            <AppText fontSize={15}>{item.name}</AppText>
                                        </View>

                                        <View style={{ justifyContent: 'center', marginHorizontal: 5, marginRight: 20 }}>
                                            <Image source={require('../../assets/arrow.png')} style={{ height: 14, width: 8, tintColor: colors.text }} />
                                        </View>
                                    </TouchableOpacity>
                                </Bg>
                            )
                        }}
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
})