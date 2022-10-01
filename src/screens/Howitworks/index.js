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
                    <AppText fontSize={30}>How It Works:</AppText>
                </View>
                <View style={{ margin: 10 }}>
                    <View style={{ margin: 10, marginTop: '5%' }}>
                        <AppText fontSize={12} textAlign='center'>‐All organizations are thoroughly researched and paired with causes that best represent the work they do. 
                        Each donation is recorded and tracked according to the cause selected. Quarterly we will release a newsletter outlining the payments made to each organization and other fascinating and relevant information.
                        Our Mission is to accelerate the world’s charitable engagement and frequency of donation to improve the lives of others.
                        </AppText>
                    </View>
                </View>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: '50%'}} resizeMode='contain' source={require('../../assets/howItWork.png')}/>
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