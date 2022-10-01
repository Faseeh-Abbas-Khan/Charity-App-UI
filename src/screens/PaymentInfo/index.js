import { SafeAreaView, StyleSheet, Image, KeyboardAvoidingView, Platform, View, TextInput, ScrollView } from 'react-native'
import React from 'react'
import AppText from '../../components/AppText'
import AppHeader from '../../components/AppHeader'
import AppInput from '../../components/AppInput'
import Bg from '../../components/Bg'
import { constants } from '../../theme';
import fonts from '../../theme/fonts'
import { useTheme } from '@react-navigation/native'

export default function Index() {

    const [cardInfo, setCarInfo] = React.useState({
        cardHolderName: '',
        cardNumber: '',
        cvv: '',
        expiry: ''
    })

    const { colors } = useTheme();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppHeader />
            <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={{ marginHorizontal: 20 }}>
                    <AppText fontSize={30}>Payment Info</AppText>
                </View>
                <View style={{ margin: 20 }}>
                    <View style={{ margin: 10 }}>
                        <AppText fontSize={15}>Card Type:</AppText>
                    </View>
                    <Bg padding={25} style={{ borderRadius: 15 }}>
                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <View style={{ flex: 5, alignItems: 'center', marginLeft: '10%' }}>
                                <Image
                                    source={require('../../assets/MasterCard.png')}
                                    style={{ height: 67, width: 110 }} resizeMode={"contain"} />
                            </View>
                            <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'flex-start' }}>
                                <Image
                                    source={require('../../assets/smallcard.png')}
                                    style={{ height: 15, width: 18, margin: '-50%' }} resizeMode={"contain"} />
                            </View>
                        </View>
                    </Bg>

                    <View style={{ marginTop: 20 }}>
                        <View style={{ margin: 10 }}>
                            <AppText fontSize={15}>Cardholder Name:</AppText>
                        </View>
                        <Bg padding={5}>
                            <TextInput
                                style={{ fontSize: 12, fontFamily: fonts.regulr, color: colors.text, height: 40, paddingHorizontal: 10 }}
                                placeholder={"Jennifer Lious"}
                                placeholderTextColor = {colors.text}
                                value={cardInfo.cardHolderName}
                                onChangeText={(value) => {
                                    setCarInfo({ ...cardInfo, cardHolderName: value })
                                }}
                            />
                        </Bg>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <View style={{ margin: 10 }}>
                            <AppText fontSize={15}>Card Number:</AppText>
                        </View>
                        <Bg padding={5}>
                            <TextInput
                                keyboardType = {"number-pad"}
                                style={{ fontSize: 12, fontFamily: fonts.regulr, color: colors.text, height: 40, paddingHorizontal: 10 }}
                                placeholder={"4242-4242-4242-4242"}
                                value={cardInfo.cardNumber}
                                placeholderTextColor = {colors.text}
                                onChangeText={(value) => {
                                    setCarInfo({ ...cardInfo, cardNumber: value })
                                }}
                            />
                        </Bg>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <View style={{ margin: 10 }}>
                            <AppText fontSize={15}>CVV:</AppText>
                        </View>
                        <Bg padding={5}>
                            <TextInput
                                keyboardType = {"number-pad"}
                                style={{ fontSize: 12, fontFamily: fonts.regulr, color: colors.text, height: 40, paddingHorizontal: 10 }}
                                placeholder={"424"}
                                placeholderTextColor = {colors.text}
                                value={cardInfo.cvv}
                                onChangeText={(value) => {
                                    setCarInfo({ ...cardInfo, cvv: value })
                                }}
                            />
                        </Bg>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <View style={{ margin: 10 }}>
                            <AppText fontSize={15}>Expiry:</AppText>
                        </View>
                        <Bg padding={5}>
                            <TextInput
                                style={{ fontSize: 12, fontFamily: fonts.regulr, color: colors.text, height: 40, paddingHorizontal: 10 }}
                                placeholder={"25/12/2027"}
                                placeholderTextColor = {colors.text}
                                value={cardInfo.expiry}
                                onChangeText={(value) => {
                                    setCarInfo({ ...cardInfo, expiry: value })
                                }}
                            />
                        </Bg>
                    </View>
                </View>
            </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: constants.CONTAINER
    },
    tabs: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 15,
        marginHorizontal: 20
    },
    tab: {
        alignItems: 'center',
        marginHorizontal: 5,
        height: 40,
        flex: 1,
        borderRadius: 100,
        overflow: 'hidden'
    }
})
