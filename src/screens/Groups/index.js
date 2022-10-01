import { SafeAreaView, StyleSheet, View, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import React from 'react'
import AppText from '../../components/AppText'
import Bg from '../../components/Bg'
import AppHeader from '../../components/AppHeader'
import GradientWrapper from '../../components/GradientWrapper'
import { constants } from '../../theme';
import fonts from '../../theme/fonts'
import { groups, trending } from '../../Data';



export default function Index({ navigation }) {

    const joinDesc = (arr) => {
        let temp = [];

        arr.map((u, i) => {
            if (i < 3) temp.push(u.name)
        })
        return temp.join(', ')
    }


    const data = [...groups, trending]
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <AppHeader />
                <View style={{ margin: 20 }}>
                    <AppText fontSize={30}>Dono Groups</AppText>
                </View>
                <View style={styles.container}>
                    {
                        <FlatList
                            bounces
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => `${index}`}
                            data={data}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity activeOpacity={.9} style={{ flex: 1, marginVertical: 12, marginTop: index == 0 ? 18 : 12, marginHorizontal: 35, zIndex: 10, minHeight: 110 }} onPress={() => {
                                        if (item.groupItems) {
                                            navigation.navigate('CharityOption', { item })
                                        } else {
                                            navigation.navigate("SubOptions", item)
                                        }
                                    }}>
                                        <Bg padding={20} style={{ flex: 1, borderRadius: 25 }}>
                                            <GradientWrapper size={54} style={{ position: 'absolute', top: -15, left: -15 }}>
                                                <Image style={{ height: 20, width: 20, }} source={item.icon} resizeMode={"contain"} />
                                            </GradientWrapper>
                                            <View style={{ alignItems: 'center' }}>
                                                <AppText fontSize={14}>{item.name}</AppText>
                                                {
                                                    item.groupItems ? (
                                                        <View style={{ margin: 5 }}>
                                                            <AppText fontSize={10} fontFamily={fonts.regulr} textAlign={"center"}>{joinDesc(item.groupItems)}</AppText>
                                                        </View>
                                                    ) : (
                                                        <View style={{ margin: 5 }}>
                                                            <AppText fontSize={10} fontFamily={fonts.regulr} textAlign={"center"}>{joinDesc(item.subItems)}</AppText>
                                                        </View>
                                                    )
                                                }

                                                {/* <View style={{ alignItems: 'center', marginTop: 10, flexDirection: 'row' }}>
                                                    {
                                                        item.groupItems ?
                                                            (
                                                                item.groupItems.map((element, index) => {
                                                                    return (index < 3) ?
                                                                        <View
                                                                            key={index}
                                                                            style={{ marginHorizontal: 3 }}>
                                                                            <AppText fontFamily={fonts.regulr} fontSize={10} textAlign={"center"}>{element.name}</AppText>
                                                                        </View>
                                                                        : <></>
                                                                })

                                                            )
                                                            :
                                                            (
                                                                item.subItems.map((element, index) => {
                                                                    return (index < 3) ?
                                                                        <View
                                                                            key={index}
                                                                            style={{ marginHorizontal: 3 }}>
                                                                            <AppText fontFamily={fonts.regulr} fontSize={10} textAlign={"center"}>{element.name}</AppText>
                                                                        </View>
                                                                        : <></>
                                                                })

                                                            )
                                                    }
                                                </View> */}
                                            </View>
                                        </Bg>
                                    </TouchableOpacity>
                                )
                            }}

                        />
                    }

                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 40,
        // marginHorizontal: constants.CONTAINER
    },
    // cardSize: {

    //     marginVertical: 5,
    // }
})