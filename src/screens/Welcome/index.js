import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { constants, colors, typography } from '../../theme';
import Feather from 'react-native-vector-icons/Feather'
import Button from '../../components/Button';
import AppText from '../../components/AppText';
import { useNavigation, useTheme } from '@react-navigation/native';
import Draggable from 'react-native-draggable';
import fonts from '../../theme/fonts';
import Modal from "react-native-modal";


function WrapperComponent({ swipeUp, onPress }) {
    const [isModal, setIsModal] = React.useState(true)
    const { colors } = useTheme();
    const navigation = useNavigation()
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setIsModal(true)
        });

        return unsubscribe;
    }, [navigation]);
    return (

        <View>
            <Modal
                animationOut={'slideOutUp'}
                animationOutTiming={100}
                onSwipeComplete={swipeUp}
                style={{ 
                    margin: 0, 
                    backgroundColor: "transparent"
                }}
                isVisible={isModal} animationIn={'slideInUp'} swipeDirection={'up'}>
                <View style={{ flex: 1, backgroundColor: colors.background  }}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.container}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require("../../assets/heart.png")} style={{ width: 241, height: 221 }} resizeMode={"contain"} />
                                <View style={{ marginTop: "15%", alignItems: 'center' }}>
                                    <View style={{}}>
                                        <View style={{ alignItems: 'center' }}>
                                            <AppText fontFamily={fonts.regulr}>Swipe up to sign in</AppText>
                                            <Image source={require("../../assets/arrowUp.png")} style={{ width: 26, height: 26, marginVertical: 10 }} resizeMode={"contain"} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {/* <Feather name={"arrow-left-circle"} size={18} color={colors.text} style={{ marginRight: 10 }} /> */}
                            <AppText fontFamily={fonts.regulr}></AppText>
                            {/* <AppText fontFamily={fonts.regulr}>More</AppText> */}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIsModal(false); onPress() }} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <AppText fontFamily={fonts.regulr}>Sign up</AppText>
                            <Feather name={"arrow-right-circle"} size={18} color={colors.text} style={{ marginLeft: 10 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default function Index({ navigation }) {
    const { colors } = useTheme();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
            <WrapperComponent swipeUp={() => {
                navigation.replace('Signin')
            }} onPress={() => { navigation.navigate('SignUp') }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 20
    }
});


{/* <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
<View style={{ flex: 1 }}>
    <Draggable x={75} y={-50} maxX={75} minX={75} minY={-100} maxY={10} onDragRelease={() => { navigation.navigate("Signin") }} shouldReverse={true} touchableOpacityProps={{ activeOpactiy: 1 }}>
        <View style={styles.container}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require("../../assets/heart.png")} style={{ width: 241, height: 221 }} resizeMode={"contain"} />
                <View style={{ marginTop: "15%", alignItems: 'center' }}>
                    <View style={{}}>
                        <View style={{ alignItems: 'center' }}>
                            <AppText fontFamily={fonts.regulr}>Swipe up to sign in</AppText>
                            <Image source={require("../../assets/arrowUp.png")} style={{ width: 26, height: 26, marginVertical: 10 }} resizeMode={"contain"} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </Draggable>
</View>
<View style={styles.row}>
    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Feather name={"arrow-left-circle"} size={18} color={colors.text} style={{ marginRight: 10 }} />
        <AppText fontFamily={fonts.regulr}>More</AppText>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => { navigation.navigate("SignUp") }} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <AppText fontFamily={fonts.regulr}>Sign up</AppText>
        <Feather name={"arrow-right-circle"} size={18} color={colors.text} style={{ marginLeft: 10 }} />
    </TouchableOpacity>
</View>
</SafeAreaView> */}