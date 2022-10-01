import { SafeAreaView, StyleSheet, View, Image, TouchableOpacity, Animated, Dimensions, FlatList, ImageBackground, Text, Easing } from 'react-native'
import React, { useEffect } from 'react'
import AppText from '../../components/AppText'
import Bg from '../../components/Bg'
import GradientWrapper from '../../components/GradientWrapper'
import { constants } from '../../theme';
import { useTheme } from '@react-navigation/native';
import fonts from '../../theme/fonts'
import { groups, trending } from '../../Data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';


export default function Index({ navigation, route }) {


    const getUserName = async () => {
        try {
            const value = await AsyncStorage.getItem('userName')
            if (value !== null) {
                setUserName(value)
            }
        } catch (e) {
            // error reading value
        }
    }

    getUserName()

    const welcomeMsg = () => {
        var welcome = '';
        var date = new Date();
        var hour = date.getHours();

        if (hour >= 5 && hour < 12) {
            welcome = "Good Morning";
        } else if (hour >= 12 && hour < 17) {
            welcome = "Good Afternoon";
        } else if (hour >= 17 && hour <= 23) {
            welcome = "Good Evening";
        } else {
            welcome = "";
        }
        return welcome;
    }



    const { colors } = useTheme();
    const spinValue = new Animated.Value(0);
    const [userName, setUserName] = React.useState('');

    Animated.loop(
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 30000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )
    ).start();

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })


    const joinDesc = (arr) => {
        return arr.map((u, i) => {
            if (i < 3) return u.name
        }).join(', ')

    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <Animatable.View animation="fadeInDown"
                style={{ marginHorizontal: 20, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flex: 1, marginLeft: '1%' }}>
                    <View style={{ marginVertical: 3 }}>
                        <AppText fontSize={15} fontFamily={fonts.regulr}>Hello</AppText>
                    </View>
                    <View>
                        <AppText fontSize={18}>{userName}</AppText>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <AppText fontSize={18}>{welcomeMsg()}</AppText>
                </View>
                <></>
            </Animatable.View>

            <TouchableOpacity onPress={() => { navigation.navigate("Groups") }} style={{}}>
                <View style={{ height: Dimensions.get('screen').height / 4, width: Dimensions.get("screen").width }} resizeMode={"stretch"}>
                    <View style={{ height: "100%", width: Dimensions.get('screen').height / 5, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                        <Animated.Image
                            source={require('../../assets/blueAnimation.png')}
                            style={{ height: Dimensions.get('screen').height / 2.2, width: Dimensions.get('screen').width / 1.4, position: 'absolute', transform: [{ rotate: spin }], borderRadius: 100 }}
                            resizeMode={"stretch"}
                        />
                        <Image
                            source={require('../../assets/heartbg.png')}
                            style={{ height: "100%", width: "100%" }}
                            resizeMode={"contain"}
                        />
                    </View>
                </View>
            </TouchableOpacity>

            <View style={{ flex: 1, justifyContent: 'center', }}>
                <View style={{ alignSelf: 'center', marginTop: 20 }}>
                    <AppText fontSize={30}>Dono Group</AppText>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity activeOpacity={.9} onPress={() => { navigation.navigate("SubOptions", trending) }} style={{ position: 'absolute', top: 110, left: Dimensions.get("window").width / 2 - 40, height: 80, width: 80, zIndex: 100 }}>
                        <Image
                            source={require('../../assets/heartbg.png')}
                            style={{ height: "100%", width: "100%" }}
                            resizeMode={"contain"}
                        />
                    </TouchableOpacity>
                    {
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => `${index}`}
                            data={groups}
                            numColumns={2}

                            renderItem={({ item, index }) => {
                                const _style = (index) == 0 ?
                                    { left: -20, top: -20, }
                                    :
                                    (index) == 1 ?
                                        { right: -20, top: -20 }
                                        :
                                        (index) == 2 ?
                                            { left: -20, bottom: -20 }
                                            :
                                            { right: -20, bottom: -20 }
                                const _style1 = (index) == 0 ?
                                    { marginRight: 10, marginTop: 25, marginLeft: 30 }
                                    :
                                    (index) == 1 ?
                                        { marginTop: 25, marginRight: 30 }
                                        :
                                        (index) == 2 ?
                                            { marginRight: 10, marginLeft: 30, marginTop: 15, marginBottom: 25 }
                                            :
                                            { marginRight: 30, marginTop: 15, marginBottom: 25 }

                                return (
                                    <>
                                        <TouchableOpacity activeOpacity={.95} style={[{ flex: 1, height: 120, zIndex: 20 }, _style1]} onPress={() => { navigation.navigate('CharityOption', { item }) }}>
                                            <GradientWrapper size={54} style={[{ position: 'absolute', zIndex: 20 }, _style]}>
                                                <Image style={{ height: 20, width: 20, }} source={item.icon} resizeMode={"contain"} />
                                            </GradientWrapper>
                                            <Bg padding={10} style={{ flex: 1, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                                                <AppText numberOfLines={1} fontSize={14}>{item.name}</AppText>
                                                <View style={{ marginTop: 5 }}>
                                                    <AppText fontSize={10} fontFamily={fonts.regulr} textAlign={"center"}>{joinDesc(item.groupItems)}</AppText>
                                                </View>
                                                {/* {
                                                        item.groupItems.map((element, index) => (
                                                            (index < 3) ?
                                                                <View key={index} style={{ marginHorizontal: 3,backgroundColor: 'pink', flex: 1}}>
                                                                    <AppText fontSize={10} fontFamily={fonts.regulr} textAlign={"center"}>{element.name}</AppText>
                                                                </View> : <></>
                                                        ))
                                                    } */}
                                            </Bg>
                                        </TouchableOpacity>
                                    </>

                                )
                            }}

                        />
                    }

                    <TouchableOpacity style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', padding: 10 }} onPress={() => { navigation.navigate("Groups") }} >
                        <Image style={{ height: 18, width: 29 }} source={require('../../assets/downArrow.png')} />
                    </TouchableOpacity>

                    {/* <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 10, }}>
                    <TouchableOpacity
                        style={{ marginHorizontal: 15 }}
                        onPress={() => { navigation.navigate('CharityOption') }}
                    >
                        <Bg padding={25} style={{ alignSelf: 'center', borderRadius: 25 }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ marginVertical: 5 }}>
                                    <AppText fontSize={14}>Humanitarian</AppText>
                                </View>
                                <View style={styles.cardSize}>
                                    <AppText fontSize={10} textAlign ={"center"}>People like disaster relief, hungry, children, medical</AppText>
                                </View>
                            </View>
                        </Bg>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ marginHorizontal: 15 }}
                        onPress={() => { navigation.navigate('CharityOption') }}
                    >
                        <Bg padding={25} style={{ alignSelf: 'center', borderRadius: 25 }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ marginVertical: 5 }}>
                                    <AppText fontSize={14}>Nature</AppText>
                                </View>
                                <View style={styles.cardSize}>
                                    <AppText fontSize={10} textAlign ={"center"}>Animal Rescue, Environment Protection, Global Warming</AppText>
                                </View>
                            </View>
                        </Bg>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 10 }}>
                    <TouchableOpacity
                        style={{ marginHorizontal: 15 }}
                        onPress={() => { navigation.navigate('CharityOption') }}
                    >
                        <Bg padding={25} style={{  borderRadius: 25, height: 110 }}>
                            
                                <View style={{ marginVertical: 5 }}>
                                    <AppText fontSize={14}>Custom</AppText>
                                </View>
                                <View style={styles.cardSize}>
                                    <AppText fontSize={10} textAlign ={"center"}>Would you like to add custom amount?</AppText>
                                </View>
                        </Bg>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ marginHorizontal: 15 }}
                        onPress={() => { navigation.navigate('CharityOption') }}
                    >
                        <Bg padding={25} style={{ alignSelf: 'center', borderRadius: 25,height: 110 }}>
                                <View style={{ marginVertical: 5, alignItems: "center" }}>
                                    <AppText fontSize={14}>Trending</AppText>
                                </View>
                                <View style={styles.cardSize}>
                                    <AppText fontSize={10} textAlign ={"center"}>Currently needy people or other organisations</AppText>
                                </View>
                        </Bg>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../../assets/downArrow.png')}
                        style={{ height: 25, width: 25 }}
                    />
                </View> */}

                    {/* <View style={{ bottom: '30%', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ position: 'absolute' }}>
                        <Image
                            source={require('../../assets/Ellipse.png')}
                            style={{ height: 95, width: 95 }}
                        />
                    </View>
                    <View>
                        <Image
                            source={require('../../assets/mid.png')}
                            style={{ height: 45, width: 45, marginTop: 10 }} />
                    </View>
                </View> */}


                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 10,
        // marginHorizontal: constants.CONTAINER
    },
    // cardSize: {

    //     marginVertical: 5,
    // }
})