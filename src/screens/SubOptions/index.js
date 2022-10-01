import { StyleSheet, TextInput, View, SafeAreaView, TouchableOpacity, Image, FlatList, ScrollViewBase, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import AppText from '../../components/AppText'
import Button from '../../components/Button'
import AppHeader from '../../components/AppHeader'
import Bg from '../../components/Bg'
import GradientWrapper from '../../components/GradientWrapper'
import { colors, constants } from '../../theme'
import { useTheme } from '@react-navigation/native'
import RBSheet from "react-native-raw-bottom-sheet"
import fonts from '../../theme/fonts'
import { showMessage } from 'react-native-flash-message'



export default function Index({ route, navigation }) {

    const items = route?.params;
    const [selectedTo, setSelectedTo] = React.useState("");
    const bottomSheetRef = React.useRef(null);
    const [ammount, setAmmount] = useState("");
    const { colors } = useTheme();
    const [type, setType] = useState("");
    const [activeItem, setActiveItem] = React.useState("");
    const [isSelected, setIsSelected] = React.useState({
        five: false,
        ten: false,
        fifty: false,
        custom: false
    })

    // alert(isSelected)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppHeader />
            <View style={styles.container}>
                <View style={{ alignSelf: 'flex-end', position: 'absolute', top: -50 }}>
                    <GradientWrapper size={65}>
                        <Image style={{ height: 30, width: 30, }} source={items.icon} resizeMode={"contain"} />
                    </GradientWrapper>
                </View>
                <View style={{ marginHorizontal: 5, }}>
                    <AppText fontSize={30}>{items?.name}</AppText>
                </View>
                <ScrollView contentContainerStyle={{ marginTop: 10, paddingBottom: 30 }}>
                    {items?.subItems.map((item, index) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.9}
                                key={index}
                                style={{ margin: 10, marginBottom: index + 1 == items?.subItems.length ? 70 : 10, marginTop: index == 0 ? 15 : 10, zIndex: items.subItems.length - index, marginHorizontal: 20 }}
                                onPress={() => {
                                    setSelectedTo(item.name)
                                    if (activeItem === index) {
                                        setActiveItem("");
                                        setIsSelected("")
                                    }
                                    else setActiveItem(index)
                                }}>
                                <Bg padding={10} style={{ borderRadius: 20, zIndex: -1 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <GradientWrapper>
                                            <Image style={{ height: 20, width: 20, }} source={item.icon} resizeMode={"contain"} />
                                        </GradientWrapper>
                                        <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 20 }}>
                                            <AppText fontSize={16}>{item.name}</AppText>
                                        </View>
                                    </View>
                                </Bg>
                                {
                                    index === activeItem ?
                                        <View style={styles.popupMenu}>
                                            <GradientWrapper size={45} style={{ position: 'absolute', top: -25, alignSelf: 'center' }}>
                                                <Image style={{ height: 20, width: 20, }} source={require("../../assets/hand.png")} resizeMode={"contain"} />
                                            </GradientWrapper>
                                            <View style={{ marginTop: 18, alignSelf: 'center' }}>
                                                <AppText fontSize={7}
                                                    color={'white'} fontFamily={fonts.regulr}>Select an amount to donate</AppText>
                                            </View>
                                            <View style={{ flex: 1, backgroundColor: colors.card, marginTop: 5, borderRadius: 10, padding: 5 }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', flex: 1 }}>
                                                    <TouchableOpacity activeOpacity={.9} onPress={() => {
                                                        setIsSelected("five");
                                                        // setType("fixed"); 
                                                        setAmmount(5);
                                                        bottomSheetRef.current.open()
                                                    }}>
                                                        {
                                                            isSelected == "five" ? (
                                                                <GradientWrapper size={44}>
                                                                    <AppText
                                                                        color={'white'}
                                                                        fontSize={12}>$5</AppText>
                                                                </GradientWrapper>
                                                            ) : (
                                                                <Bg padding={0} style={{ borderRadius: 20, height: 40, width: 40, alignItems: 'center', justifyContent: "center" }}>
                                                                    <AppText fontSize={12}>$5</AppText>
                                                                </Bg>
                                                            )
                                                        }

                                                    </TouchableOpacity>
                                                    <TouchableOpacity activeOpacity={.9} onPress={() => {
                                                        setIsSelected("ten")
                                                        // setType("fixed"); 
                                                        setAmmount(10); bottomSheetRef.current.open()
                                                    }}>
                                                        {
                                                            isSelected == "ten" ? (
                                                                <GradientWrapper size={44}>
                                                                    <AppText
                                                                        color={'white'}
                                                                        fontSize={12}>$10</AppText>
                                                                </GradientWrapper>
                                                            ) : (
                                                                <Bg padding={0} style={{ borderRadius: 20, height: 40, width: 40, alignItems: 'center', justifyContent: "center" }}>
                                                                    <AppText fontSize={12}>$10</AppText>
                                                                </Bg>
                                                            )
                                                        }
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', flex: 1 }}>
                                                    <TouchableOpacity activeOpacity={.9} onPress={() => {
                                                        setIsSelected("fifty")
                                                        // setType("fixed"); 
                                                        setAmmount(50); bottomSheetRef.current.open()
                                                    }}>
                                                        {
                                                            isSelected == "fifty" ? (
                                                                <GradientWrapper size={44}>
                                                                    <AppText
                                                                        color={'white'}
                                                                        fontSize={12}>$50</AppText>
                                                                </GradientWrapper>
                                                            ) : (
                                                                <Bg padding={0} style={{ borderRadius: 20, height: 40, width: 40, alignItems: 'center', justifyContent: "center" }}>
                                                                    <AppText fontSize={12}>$50</AppText>
                                                                </Bg>
                                                            )
                                                        }
                                                    </TouchableOpacity>
                                                    <TouchableOpacity activeOpacity={.9} onPress={() => {
                                                        setIsSelected("custom")
                                                        setTimeout(() => {
                                                            bottomSheetRef.current.open()
                                                        }, 400);
                                                    }}>
                                                        {
                                                            isSelected == "custom" ? (
                                                                <GradientWrapper size={44}>
                                                                    <Image source={require("../../assets/dollercoin.png")} style={{ width: 15, height: 15, left: -1, bottom: 1 }} resizeMode={"contain"} />
                                                                </GradientWrapper>
                                                            ) : (
                                                                <Bg padding={0} style={{ borderRadius: 20, height: 40, width: 40, alignItems: 'center', justifyContent: "center" }}>
                                                                    <Image source={require("../../assets/dollercoin.png")} style={{ width: 15, height: 15, left: -1, bottom: 1, tintColor: colors.text }} resizeMode={"contain"} />
                                                                </Bg>
                                                            )
                                                        }

                                                    </TouchableOpacity>
                                                </View>

                                            </View>
                                        </View>
                                        : <></>
                                }
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>

                <RBSheet
                    ref={bottomSheetRef}
                    height={Dimensions.get("screen").height / 1.5}
                    openDuration={250}
                    closeOnDragDown={true}
                    onClose={() => setIsSelected("")}
                    customStyles={{
                        wrapper: {
                            backgroundColor: "rgba(196, 196, 196, 0.3)"

                        },
                        container: {
                            backgroundColor: colors.background,
                            borderTopLeftRadius: 35,
                            borderTopRightRadius: 35,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }
                    }}
                >
                    <View style={[styles.sheet, { backgroundColor: colors.background }]}>
                        <View style={{ flex: 1, marginVertical: 10, justifyContent: 'center' }}>
                            <GradientWrapper size={98} style={{ alignSelf: 'center' }}>
                                <Image source={require("../../assets/dollercoin.png")} style={{ width: 35, height: 35, left: -2, bottom: 2 }} resizeMode={"contain"} />
                            </GradientWrapper>
                            <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                                {
                                    isSelected == "custom" ?
                                        <AppText fontSize={25} textAlign={"center"}>Enter An Amount To Donate</AppText>
                                        :
                                        <AppText fontSize={25} textAlign={"center"}>Please Confirm The Amount</AppText>
                                }
                            </View>
                            <View style={{ marginVertical: 5 }}>

                                {
                                    (isSelected == "custom" &&
                                        <>
                                            <View style={{ marginVertical: 10 }}>
                                                <AppText fontSize={15}>Enter an amount</AppText>
                                            </View>
                                            <Bg padding={10}>
                                                <View style={{ flexDirection: 'row', height: 30 }}>
                                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                        <Image
                                                            source={require('../../assets/dollerfill.png')}
                                                            style={{ height: 21, width: 21 }}
                                                        />
                                                    </View>
                                                    <View style={{ flex: 1, marginHorizontal: 5 }}>
                                                        <TextInput
                                                            keyboardType={"number-pad"}
                                                            placeholder={"Amount"}
                                                            value={ammount}
                                                            placeholderTextColor={colors.text}
                                                            style={{ paddingVertical: 0, flex: 1, fontSize: 12, fontFamily: fonts.regulr, color: colors.text }}
                                                            onChangeText={(value) => { setAmmount(value) }}
                                                        />
                                                    </View>

                                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                        <Image
                                                            source={require('../../assets/editInfo.png')}
                                                            style={{ height: 20, width: 20 }}
                                                        />
                                                    </View>
                                                </View>
                                            </Bg>
                                        </>
                                    )
                                }
                            </View>
                        </View>
                        <Button style={{ marginVertical: 50, backgroundColor: "black", borderRadius: 10 }} disable={ammount <= 0} lable={`Donate $${ammount || 0}`} onPress={() => {
                            if (ammount > 0) {
                                bottomSheetRef.current.close();
                                setTimeout(() => {
                                    let tempParam = {
                                        amount: ammount,
                                        To: selectedTo
                                    }
                                    navigation.navigate('Payment', { tempParam })
                                }, 300);
                            } else {
                                showMessage({
                                    message: "Please Enter Some Amount",
                                    type: "info"
                                })
                            }
                        }} />
                    </View>
                </RBSheet>
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
        height: 150,
        width: 140,
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