import { SafeAreaView, StyleSheet, Image, View, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import AppText from '../../components/AppText'
import AppHeader from '../../components/AppHeader'
import Bg from '../../components/Bg'
import { constants } from '../../theme';
import { useTheme } from '@react-navigation/native'
import MyContext from '../../MyContext';
import { colors as c } from '../../theme'

export default function Index() {


    const { colors } = useTheme()
    const Theme = [
        {
            title: 'Light Mode',
            isDark: false,
            bodyText: 'Best to use in Light Environment',
            img: require('../../assets/LightModePhone.png'),
            bg: c.lightTheme.card

        },
        {
            title: 'Dark Mode',
            isDark: true,
            bodyText: 'Best to use in Dark Environment',
            img: require('../../assets/darkModePhone.png'),
            bg: c.darkTheme.card

        }
    ]
    return (
        <MyContext.Consumer>
            {context => (
                <SafeAreaView style={{ flex: 1 }}>
                    <AppHeader />
                    <View style={styles.container}>
                        <AppText fontSize={30}>Appearance</AppText>
                        <View style={{ marginHorizontal: 15, marginVertical: 30 }}>
                            <FlatList
                                data={Theme}
                                keyExtractor={(item, index) => `${index}`}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity
                                            activeOpacity={.9}
                                            style={{ marginVertical: 20 }}
                                            onPress={() => { context.toggleTheme() }}
                                        >
                                            <Bg padding={20} style={{ flexDirection: 'row', borderRadius: 40, backgroundColor: item.bg }} >
                                                <Image
                                                    source={item.img}
                                                    style={{ height: 115, width: 72 }} />
                                                <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 30 }}>
                                                    <AppText fontSize={23} color={item.isDark ? c.darkTheme.text : c.lightTheme.text}>{item.title}</AppText>
                                                    <View style={{ marginTop: 5 }}>
                                                        <AppText fontSize={12} color={item.isDark ? c.darkTheme.text : c.lightTheme.text}>{item.bodyText}</AppText>
                                                    </View>
                                                </View>
                                            </Bg>
                                            {
                                                item.isDark == context.isDark ? (
                                                    <View style={{ position: 'absolute', right: 0, top: -10 }}>
                                                        <Image
                                                            source={require('../../assets/greenCheckCircle.png')}
                                                            style={{ height: 58, width: 58 }}
                                                        />
                                                    </View>
                                                ) : null
                                            }
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>

                    </View>
                </SafeAreaView>
            )}
        </MyContext.Consumer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: constants.CONTAINER
    },
})