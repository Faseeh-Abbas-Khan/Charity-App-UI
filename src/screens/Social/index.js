import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import AppText from '../../components/AppText'
import AppHeader from '../../components/AppHeader'
import Bg from '../../components/Bg'
import GradientWrapper from '../../components/GradientWrapper'
import { constants } from '../../theme';
import { useTheme } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient';

const groupItems = [
    { icon: require('../../assets/icons/Hunger.png'), name: "John Doe" },
    { icon: require('../../assets/icons/Children.png'), name: "Jennifer" },
    { icon: require('../../assets/icons/DisasterRelief.png'), name: "Lewis Brock" },
    { icon: require('../../assets/icons/medicalOld.png'), name: "Smith Karl" },
    { icon: require('../../assets/icons/Children.png'), name: "Elif Yelidiz" },
]


export default function Index({ navigation }) {
    const tabs = ["Personal", "Friends", "Global"]
    const [active, setActive] = React.useState(tabs[0]);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppHeader />
            <View style={styles.container}>
                <View style={{ marginHorizontal: 20 }}>
                    <AppText fontSize={30}>Social</AppText>
                </View>
                <View style={styles.tabs}>
                    {
                        tabs.map(tab => (
                            <TouchableOpacity activeOpacity={1} key={tab} style={styles.tab} onPress={() => { setActive(tab) }}>
                                {
                                    active == tab ?
                                        <LinearGradient colors={['#DB74C7', '#F3B35D']} style={{ width: "100%", flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}>
                                            <AppText fontSize={15}>{tab}</AppText>
                                        </LinearGradient>
                                        :
                                        <Bg padding={0} style={{ borderRadius: 100, width: "100%", alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                                            <AppText fontSize={15}>{tab}</AppText>
                                        </Bg>
                                }
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ paddingTop: 10 }}>
                        {groupItems.map((item, index) => {
                            return (
                                <TouchableOpacity activeOpacity={0.8} key={index} style={{ marginVertical: 10, }} onPress={() => { }}>
                                    <Bg padding={10} style={{ borderRadius: 20, zIndex: -1 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <GradientWrapper >
                                                <Image style={{ height: 20, width: 20, }} source={item.icon} resizeMode={"contain"} />
                                            </GradientWrapper>
                                            <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 15 }}>
                                                <AppText fontSize={16}>{item.name}</AppText>
                                            </View>
                                        </View>
                                    </Bg>
                                </TouchableOpacity>
                            )
                        })}
                        <View style={{ height: 120 }} />
                    </ScrollView>
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
        borderRadius: 100,
        // overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})