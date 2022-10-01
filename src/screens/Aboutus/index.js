import { SafeAreaView, StyleSheet, Image, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import AppText from '../../components/AppText'
import AppHeader from '../../components/AppHeader'
import { constants } from '../../theme';
import fonts from '../../theme/fonts'

export default function Index() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppHeader />
            <View style={styles.container}>
                <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
                    <AppText fontSize={30}>About Us:</AppText>
                </View>
                <View style={{ margin: 10, }}>
                    <View style={{ margin: 10, marginTop: '5%' }}>
                        <AppText fontFamily={fonts.regulr} fontSize={12} textAlign='center'>
                            DONO APP is a platform developed to increase access and participation between donors and the causes they care most about DONO APP distills the best of breed charitable organizations into groups and causes, allowing for the user to donate easily and effectively.
                        </AppText>
                    </View>
                </View>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: '55%'}} resizeMode='contain' source={require('../../assets/aboutUsLogo.png')}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: constants.CONTAINER
    },
})