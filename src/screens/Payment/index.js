import { SafeAreaView, StyleSheet, Image, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import AppText from '../../components/AppText'
import AppHeader from '../../components/AppHeader'
import AppInput from '../../components/AppInput'
import Bg from '../../components/Bg'
import { constants } from '../../theme';
import fonts from '../../theme/fonts'
import { useTheme } from '@react-navigation/native'
import Button from '../../components/Button'


export default function Index({ navigation, route }) {

    const tempParam = route.params.tempParam;

    const tabs = [

        {
            image: require('../../assets/MasterCard.png'),
            name: 'master'
        },
        {
            image: require('../../assets/Visa.png'),
            name: 'visa'
        },
        {
            image: require('../../assets/paypal.png'),
            name: "paypal"
        },
        {
            image: require('../../assets/applePay.png'),
            name: "apple"
        }

    ]
    const [active, setActive] = React.useState(tabs[0].name);

    const [cardInfo, setCarInfo] = React.useState({
        cardHolderName: '',
        cardNumber: '',
        cvv: '',
        expiry: ''
    })

    const { colors, dark } = useTheme();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppHeader />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
                    <AppText fontSize={30}>Payment</AppText>
                </View>
                <View style={{ marginHorizontal: 15 }}>
                    <View style={{ marginVertical: 10, alignItems: 'center' }}>
                        <AppText fontSize={15}>Select Payment Method</AppText>
                    </View>
                    <View style={styles.tabs}>
                        {
                            tabs.map(tab => (
                                <TouchableOpacity activeOpacity={.9} key={tab.name} style={styles.tab} onPress={() => { setActive(tab.name) }}>
                                    {
                                        active != tab.name ?
                                            <View style={{ width: "100%", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                                <Image style={{ height: 33, width: 45, resizeMode: 'contain' }} source={tab.image} />
                                            </View>
                                            :
                                            <Bg padding={0} style={{ justifyContent: 'center', alignItems: 'center', flex: 1, width: '100%' }}>
                                                <Image style={{ height: 33, width: 45, resizeMode: 'contain' }} source={tab.image} />
                                            </Bg>
                                    }
                                </TouchableOpacity>
                            ))
                        }


                    </View>

                    <View style={{ marginVertical: 15 }}>
                        <AppText fontSize={15}>Your Card Details</AppText>
                    </View>
                    {
                        (active != "paypal" &&
                            <View style={{ marginTop: 0 }}>
                                <View style={{ marginVertical: 10, marginHorizontal: 5 }}>
                                    <AppText fontSize={15}>Card Holder</AppText>
                                </View>
                                <Bg padding={5}>
                                    <TextInput
                                        style={[styles.input, { color: colors.text }]}
                                        placeholder={"Elif Simmy"}
                                        keyboardType={"default"}
                                        placeholderTextColor={dark ? colors.white : colors.black}
                                        value={cardInfo.cardHolderName}
                                        onChangeText={(value) => {
                                            setCarInfo({ ...cardInfo, cardHolderName: value })
                                        }}
                                    />
                                </Bg>
                            </View>
                        )
                    }

                    <View style={{ marginTop: 5 }}>
                        <View style={{ marginVertical: 10, marginHorizontal: 5 }}>
                            <AppText fontSize={15}>Card Number:</AppText>
                        </View>
                        <Bg padding={5}>
                            <TextInput
                                style={[styles.input, { color: colors.text }]}
                                placeholder={"XXXX-XXXX-XXXX-4242"}
                                keyboardType={"numeric"}
                                placeholderTextColor={dark ? colors.white : colors.black}
                                value={cardInfo.cardNumber}
                                onChangeText={(value) => {
                                    setCarInfo({ ...cardInfo, cardNumber: value })
                                }}
                            />
                        </Bg>
                    </View>

                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>

                        <View style={{ marginTop: 5, flex: 0.45, }}>
                            <View style={{ marginVertical: 10, marginHorizontal: 5 }}>
                                <AppText fontSize={15}>Valid Through</AppText>
                            </View>
                            <Bg padding={5}>
                                <TextInput
                                    style={[styles.input, { color: colors.text }]}
                                    placeholderTextColor={dark ? colors.white : colors.black}
                                    placeholder={"25/12/2027"}
                                    keyboardType={"numbers-and-punctuation"}
                                    value={cardInfo.expiry}
                                    onChangeText={(value) => {
                                        setCarInfo({ ...cardInfo, expiry: value })
                                    }}
                                />
                            </Bg>
                        </View>

                        <View style={{ marginTop: 5, flex: 0.45 }}>
                            <View style={{ marginVertical: 10, marginHorizontal: 5 }}>
                                <AppText fontSize={15}>CVV:</AppText>
                            </View>
                            <Bg padding={5}>
                                <TextInput
                                    keyboardType={"numeric"}
                                    style={[styles.input, { color: colors.text }]}
                                    placeholderTextColor={dark ? colors.white : colors.black}
                                    placeholder={"234"}
                                    value={cardInfo.cvv}
                                    onChangeText={(value) => {
                                        setCarInfo({ ...cardInfo, cvv: value })
                                    }}
                                />
                            </Bg>
                        </View>
                    </View>

                    <Button style={{ marginVertical: 40, backgroundColor: "black", borderRadius: 10 }} lable={"Confirm Payment"} onPress={() => { navigation.navigate("TransactionDetail", { tempParam }) }} />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: constants.CONTAINER
    },
    tabs: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        flex: 1,
        width: 66,
        height: 50,
        borderRadius: 15,
    },
    input: { flex: 1, fontSize: 12, fontFamily: fonts.regulr, paddingVertical: 0, height: 40, paddingHorizontal: 10 }
})
