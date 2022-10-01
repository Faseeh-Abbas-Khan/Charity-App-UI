import { SafeAreaView, StyleSheet, Image, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import AppText from '../../components/AppText'
import AppHeader from '../../components/AppHeader'
import AppInput from '../../components/AppInput'
import Bg from '../../components/Bg'
import GradientWrapper from '../../components/GradientWrapper'
import { constants } from '../../theme';
// import LinearGradient from 'react-native-linear-gradient';
import fonts from '../../theme/fonts'


export default function Index() {
    const tabs = ["This Week", "This Month", "This Year"]
    const [active, setActive] = React.useState(tabs[0]);
    const DataHistory = [
        {
            date: '15/02/2022',
            detail: 'Hunger',
            amount: '120'
        },
        {
            date: '15/02/2022',
            detail: 'Medical',
            amount: '90'
        },
        {
            date: '15/02/2022',
            detail: 'Nature',
            amount: '129'
        },
        {
            date: '15/02/2022',
            detail: 'Custom',
            amount: '130'
        },
        {
            date: '15/02/2022',
            detail: 'Disaster Relief',
            amount: '400'
        },
        {
            date: '15/02/2022',
            detail: 'Children',
            amount: '187'
        },
        {
            date: '15/02/2022',
            detail: 'Hunger',
            amount: '120'
        },
        {
            date: '15/02/2022',
            detail: 'Medical',
            amount: '90'
        },
        {
            date: '15/02/2022',
            detail: 'Nature',
            amount: '129'
        },
        {
            date: '15/02/2022',
            detail: 'Custom',
            amount: '130'
        },
        {
            date: '15/02/2022',
            detail: 'Disaster Relief',
            amount: '400'
        },
        {
            date: '15/02/2022',
            detail: 'Children',
            amount: '187'
        },
        {
            date: '15/02/2022',
            detail: 'Hunger',
            amount: '120'
        },
        {
            date: '15/02/2022',
            detail: 'Medical',
            amount: '90'
        },
        {
            date: '15/02/2022',
            detail: 'Nature',
            amount: '129'
        },
        {
            date: '15/02/2022',
            detail: 'Custom',
            amount: '130'
        },
        {
            date: '15/02/2022',
            detail: 'Disaster Relief',
            amount: '400'
        },
        {
            date: '15/02/2022',
            detail: 'Children',
            amount: '187'
        }
    ]
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppHeader />
            <View style={styles.container}>
                <View style={{ marginHorizontal: 20 }}>
                    <AppText fontSize={30}>Histroy</AppText>
                </View>

                <View style={styles.tabs}>
                    {
                        tabs.map(tab => {
                            return (
                                <TouchableOpacity activeOpacity={1} key={tab} style={styles.tab} onPress={() => { setActive(tab) }}>
                                    {
                                        active == tab ?
                                            <GradientWrapper size = {"100%"}>
                                                <AppText fontSize={12}>{tab}</AppText>
                                            </GradientWrapper>
                                            :
                                            <Bg padding={0} style={{ borderRadius: 100, width: "100%", alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                                                <AppText fontSize={12}>{tab}</AppText>
                                            </Bg>
                                    }
                                </TouchableOpacity>
                            )
                        })
                    }

                </View>

                <View style={{ flexDirection: 'row', marginTop: '10%', justifyContent: 'space-evenly' }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                    <AppText fontSize={15} numberOfLines = {1} allowFontScaling adjustsFontSizeToFit>Date</AppText>
                    </View>

                    <View style={{ flex: 1.5, alignItems: 'center' }}>
                        <AppText fontSize={15} numberOfLines = {1} allowFontScaling adjustsFontSizeToFit>Detail</AppText>
                    </View>

                    <View style={{ flex: 1, alignItems: 'center' }}>
                    <AppText fontSize={15} numberOfLines = {1} allowFontScaling adjustsFontSizeToFit>Amount</AppText>
                    </View>
                </View>

                <View>
                    <FlatList
                        style={{ marginTop: 15, paddingHorizontal: 20, marginBottom: 30 }}
                        data={DataHistory}
                        keyExtractor={(item, index) => `${index}`}
                        showsVerticalScrollIndicator={false}
                        ListFooterComponent = {()=><View style={{height: 150,}} />}
                        renderItem={({ item }) => {
                            return (
                                <Bg style={{
                                    borderRadius: 4,
                                    marginVertical: 5
                                }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', height: 32 }}>
                                        <View style={{ flex: 1, alignItems: 'center' }}>
                                            <AppText fontSize={14} fontFamily = {fonts.regulr} numberOfLines ={1} allowFontScaling adjustsFontSizeToFit>{item.date}</AppText>
                                        </View>
                                        <View style={{ flex: 1.5, alignItems: 'center' }}>
                                        <AppText fontSize={14} fontFamily = {fonts.regulr} numberOfLines ={1} allowFontScaling adjustsFontSizeToFit>{item.detail}</AppText>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'center' }}>
                                        <AppText fontSize={14} fontFamily = {fonts.regulr} numberOfLines ={1} allowFontScaling adjustsFontSizeToFit>${item.amount}</AppText>
                                        </View>
                                    </View>
                                </Bg>
                            )
                        }}
                    />
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
        // overflow: 'hidden'
    }
})