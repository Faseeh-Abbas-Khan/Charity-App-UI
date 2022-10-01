import { SafeAreaView, StyleSheet, Image, View, Text, Modal, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

import AppText from '../../components/AppText'
import AppHeader from '../../components/AppHeader'
import AppInput from './AppInput'
import { constants } from '../../theme';
import fonts from '../../theme/fonts';
import Button from '../../components/Button'

import { useTheme } from '@react-navigation/native'
import RBSheet from "react-native-raw-bottom-sheet";
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Share from 'react-native-share';
import ViewShot from "react-native-view-shot";
import RNFS from "react-native-fs";
import MaskedView from '@react-native-community/masked-view';



export default function Index({ navigation, route }) {

    const To = route?.params?.tempParam.To;
    const ammount = route?.params?.tempParam.amount;
    const { colors, dark } = useTheme();
    const bottomSheetRef1 = React.useRef(null);
    const [isModal, setIsModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const uri = React.useRef(null);
    const [state, setState] = useState({
        from: "",
        to: "",
    })


    const customShare = () => {
        uri.current.capture().then((uri) => {
            RNFS.readFile(uri, 'base64').then(async (res) => {
                const shareOption = {
                    message: 'Transaction Receipt',
                    url: `data:image/jpeg;base64,${res}`,
                }
                try {
                    const shareRes = await Share.open(shareOption)
                }
                catch (e) {
                    console.log(e)
                }
            })
        })
    }

    const getUserName = async () => {
        try {
            const value = await AsyncStorage.getItem('userName')
            if (value !== null) {
                setState({
                    from: value,
                    to: To
                })

            }
        } catch (e) {
            // error reading value
        }
    }



    useEffect(() => {
        setTimeout(() => {
            bottomSheetRef1.current.open()
        }, 300);
        getUserName();
        console.log(To)
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppHeader />
            <View style={styles.container}>
                <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
                    <AppText fontSize={30}>Transaction Details</AppText>
                </View>
            </View>
            <Modal visible={isModal} animationType={"fade"}>
                <ViewShot
                    ref={uri}
                    options={{ format: 'jpg', quality: 0.9, }}
                    style={[styles.sheet, { margin: 0, backgroundColor: colors.background, paddingHorizontal: 20 }]}>
                    <LinearGradient colors={['#DB74C7', '#F3B35D']} style={{ width: "100%", height: 130, alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>
                        <TouchableOpacity style={{ position: 'absolute', right: 5, top: 5, zIndex: 10 }} onPress={() => {

                            setIsModal(false);
                            setTimeout(() => {
                                navigation.navigate("Home", { screen: "MainScreen" })
                            }, 300);
                        }}>
                            <View>
                                <Image style={{ height: 28, width: 28 }} source={require('../../assets/greyCrossCircle.png')} />
                            </View>
                        </TouchableOpacity>
                        <View >
                            <Image style={{ height: 44, width: 44 }} source={require('../../assets/greenCheckCircle.png')} />
                        </View>
                        <AppText fontSize={25} textAlign={"center"}>Payment processed successfully</AppText>
                    </LinearGradient>
                    <View style={{ backgroundColor: colors.card, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: colors.text, marginBottom: 0 }}>
                            <MaskedView
                                maskElement={
                                    <View
                                        style={{
                                            backgroundColor: 'transparent',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <AppText fontSize={15} fontFamily={fonts.regulr}>Amount sent</AppText>
                                    </View>
                                }
                            >
                                <LinearGradient style={{ height: 20 }} colors={['#DB74C7', '#F3B35D']}></LinearGradient>

                            </MaskedView>
                            <View style={{ marginVertical: 7 }}>
                                <AppText textAlign={"center"} fontSize={33} >${ammount}</AppText>
                            </View>
                            <View style={{ marginBottom: 5, marginHorizontal: 60 }}>
                                <AppText textAlign={"center"} fontFamily={fonts.regulr} fontSize={12}>Check your payment status in Payment History </AppText>
                            </View>
                            <AppText textAlign={"center"} fontFamily={fonts.regulr} fontSize={12}>{moment(new Date()).format(' DD MMMM YYYY')} </AppText>
                        </View>
                        <View style={{ paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: colors.text, marginBottom: 20 }}>
                            <MaskedView
                                maskElement={
                                    <View
                                        style={{
                                            backgroundColor: 'transparent',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <AppText fontSize={15} fontFamily={fonts.regulr}>Paid to</AppText>
                                    </View>
                                }
                            >
                                <LinearGradient style={{ height: 20 }} colors={['#DB74C7', '#F3B35D']}></LinearGradient>

                            </MaskedView>
                            <View style={{ marginVertical: 0 }}>
                                <AppText textAlign={"center"} fontSize={16} >{state.to}</AppText>
                            </View>
                            <View style={{ marginBottom: 5, marginHorizontal: 60 }}>
                                <AppText textAlign={"center"} fontFamily={fonts.regulr} fontSize={12}>Transaction ID: 122334556678</AppText>
                            </View>
                            <MaskedView
                                maskElement={
                                    <View
                                        style={{
                                            backgroundColor: 'transparent',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <AppText fontSize={15} fontFamily={fonts.regulr}>Paid from</AppText>
                                    </View>
                                }
                            >
                                <LinearGradient style={{ height: 20 }} colors={['#DB74C7', '#F3B35D']}></LinearGradient>

                            </MaskedView>
                            <View style={{ marginVertical: 0 }}>
                                <AppText textAlign={"center"} fontSize={16} >{state.from}</AppText>
                            </View>
                        </View>
                        <Button icon style={{ marginTop: 20, backgroundColor: '#2D2D2D', borderRadius: 100, marginBottom: 30, paddingHorizontal: 25 }} lable={"SHARE"} onPress={() => { customShare() }} isGradient={true} />
                    </View>
                </ViewShot>
            </Modal>
            <RBSheet
                ref={bottomSheetRef1}
                height={Dimensions.get("screen").height / 1.5}
                openDuration={250}
                closeOnDragDown={false}
                closeOnPressMask={false}
                // closeOnPressBack = {false}
                // onClose = {()=>{navigation.goBack()}}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(196, 196, 196, 0.3)"

                    },
                    // draggableIcon: {
                    //     backgroundColor: "#000"
                    // },
                    container: {
                        backgroundColor: colors.background,
                        borderTopLeftRadius: 35,
                        borderTopRightRadius: 35,
                        justifyContent: 'center',
                        // alignItems: 'center'
                    }
                }}
            >
                <View style={[styles.sheet, { backgroundColor: colors.background }]}>
                    <View style={{ flex: 1, marginVertical: 10, justifyContent: 'center' }}>
                        <LinearGradient colors={['#DB74C7', '#F3B35D']} style={{ width: "100%", flex: 1, justifyContent: 'center', borderTopLeftRadius: 15, borderTopRightRadius: 15, padding: 15, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    {/* <View style={{ height: 40, width: 40, backgroundColor: colors.text, borderRadius: 100, marginRight: 15 }} /> */}
                                    <AppText>Transaction Details</AppText>
                                </View>
                                <AppText fontSize={20} >{`❯`}</AppText>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    {/* <View style={{ height: 40, width: 40, marginRight: 15 }} /> */}
                                    <AppText fontFamily={fonts.regulr} fontSize={12} color={colors.black} > {moment(new Date()).format('L')}</AppText>
                                </View>
                                <AppText fontFamily={fonts.regulr} fontSize={12} color={colors.black} >{moment(new Date()).format(`hh:mma`)}</AppText>
                            </View>
                        </LinearGradient>
                        <View style={{ flex: 3, backgroundColor: colors.card, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, paddingHorizontal: 20, paddingVertical: 25 }}>
                            <AppInput placeholder={"From"} value={state.from}
                            //  onChangeText={value => { setState({ ...state, from: value }) }}
                            />
                            <AppInput placeholder={"To"} value={state.to}
                            // onChangeText={value => { setState({ ...state, to: value }) }} 
                            />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 8 }}>
                                <View >
                                    <AppText fontSize={12} fontFamily={fonts.regulr}
                                    >Status</AppText>
                                </View>
                                <MaskedView
                                    style={{ flex: 0.3 }}
                                    maskElement={
                                        <View
                                            style={{
                                                flex: 1,
                                                backgroundColor: 'transparent',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <AppText fontSize={12} fontFamily={fonts.regulr}>
                                                Processing
                                            </AppText>
                                        </View>
                                    }
                                >
                                    <LinearGradient style={{ flex: 1, }} colors={['#DB74C7', '#F3B35D']}></LinearGradient>
                                </MaskedView>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 8, alignItems: 'center' }}>
                                <MaskedView
                                    style={{ flex: 0.3 }}
                                    maskElement={
                                        <View
                                            style={{
                                                flex: 1,
                                                backgroundColor: 'transparent',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <AppText>{`Amount\n`}<AppText>Donated</AppText></AppText>
                                        </View>
                                    }
                                >
                                    <LinearGradient style={{ flex: 1, }} colors={['#DB74C7', '#F3B35D']}></LinearGradient>
                                </MaskedView>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <AppText fontSize={33} >${ammount}</AppText>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Button style={{ marginTop: 20, backgroundColor: "black", borderRadius: 10 }} lable={"Continue"} isLoading={isLoading} onPress={() => {
                        setIsLoading(true);
                        setTimeout(() => {
                            setIsLoading(false);
                            bottomSheetRef1.current.close();
                            setTimeout(() => {
                                setIsModal(true)
                            }, 500);
                        }, 1000);
                    }} />
                </View>
            </RBSheet>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: constants.CONTAINER
    },
    sheet: {
        flex: 1,
        justifyContent: 'center',
        margin: 30
    }
})
