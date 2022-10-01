import { SafeAreaView, StyleSheet, Image, View,KeyboardAvoidingView, TextInput, ScrollView, TouchableOpacity, PlatformColor } from 'react-native'
import React, { useRef } from 'react'
import AppText from '../../components/AppText'
import AppHeader from '../../components/AppHeader'
import Button from '../../components/Button'
import Bg from '../../components/Bg'
import { constants } from '../../theme';
import fonts from '../../theme/fonts'
import { useTheme } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { showMessage } from 'react-native-flash-message'

export default function Index() {

    const [accountInfo, setAccountInfo] = React.useState({
        name: '',
        email: '',
        password: '',
        address: ''
    })
    const nameRef = useRef(false);
    const emailRef = useRef(false);
    const passwordRef = useRef(false);
    const addressRef = useRef(false);
    const [isLoading, setIsLoading] = React.useState(false)

    const {colors} = useTheme();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppHeader />
            <KeyboardAvoidingView  behavior={PlatformColor.OS === "ios" ? "padding" : "height"} style={styles.container}>
                <View style={{marginHorizontal: 20}}>
                    <AppText fontSize={30}>Account Info</AppText>
                </View>
                <ScrollView style={{ marginTop: 25 }} showsVerticalScrollIndicator  ={false} keyboardShouldPersistTaps = {"always"}>

                    <View style={{ margin: 10 }}>
                        <View style={{ marginVertical: 10, marginLeft: 10 }}>
                            <AppText fontSize={15}>Name:</AppText>
                        </View>
                        <Bg padding={10}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', height: 30, marginHorizontal: 5}}>
                                <Image
                                    source={require('../../assets/person.png')}
                                    style={{ height: 20, width: 20 }}
                                    resizeMode = {"contain"}
                                />
                                <View style={{ flex: 1,marginHorizontal: 10 }}>
                                    <TextInput
                                        ref = {nameRef}
                                        style={{flex: 1, fontSize: 12, fontFamily: fonts.regulr, color: colors.text, paddingVertical: 0}}
                                        placeholder={"Jennifer Lious"}
                                        value={accountInfo.name}
                                        placeholderTextColor = {colors.text}
                                        onChangeText={(value) => { setAccountInfo({ ...accountInfo, name: value }) }} />
                                </View>

                                <TouchableOpacity style={{  alignItems: 'center', justifyContent: 'center' }} onPress ={()=>{nameRef.current.focus()}}>
                                    <AntDesign
                                        name  = {"edit"}
                                        size = {25}
                                        color= {colors.text}
                                    />
                                </TouchableOpacity>
                            </View>
                        </Bg>
                    </View>


                    <View style={{ margin: 10 }}>
                        <View style={{ marginVertical: 10, marginLeft: 10 }}>
                            <AppText fontSize={15}>Email:</AppText>
                        </View>
                        <Bg padding={10}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', height: 30, marginHorizontal: 5}}>
                                
                                <Image
                                    source={require('../../assets/email.png')}
                                    style={{ height: 20, width: 20 }}
                                    resizeMode = {"contain"}
                                />
                                <View style={{ flex: 1,marginHorizontal: 10 }}>
                                    <TextInput
                                        ref = {emailRef}
                                        placeholderTextColor = {colors.text}
                                        style={{flex: 1, fontSize: 12, fontFamily: fonts.regulr, color: colors.text, paddingVertical: 0}}
                                        placeholder={"Jenniferlious12@gmail.com"}
                                        value={accountInfo.email}
                                        onChangeText={(value) => { setAccountInfo({ ...accountInfo, email: value }) }} />
                                </View>

                                <TouchableOpacity style={{  alignItems: 'center', justifyContent: 'center' }} onPress ={()=>{emailRef.current.focus()}}>
                                    <AntDesign
                                        name  = {"edit"}
                                        size = {25}
                                        color= {colors.text}
                                    />
                                </TouchableOpacity>
                            </View>
                        </Bg>
                    </View>


                    <View style={{ margin: 10 }}>
                        <View style={{ marginVertical: 10, marginLeft: 10 }}>
                            <AppText fontSize={15}>Password:</AppText>
                        </View>
                        <Bg padding={10}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', height: 30, marginHorizontal: 5}}>
                                <Image
                                    source={require('../../assets/lockPass.png')}
                                    style={{ height: 20, width: 20 }}
                                    resizeMode = {"contain"}
                                />
                                <View style={{ flex: 1, marginHorizontal: 10, }}>
                                    <TextInput
                                        ref = {passwordRef}
                                        placeholderTextColor = {colors.text}
                                        style={{flex: 1, fontSize: 12, fontFamily: fonts.regulr, color: colors.text, paddingVertical: 0}}
                                        placeholder={"123456789"}
                                        secureTextEntry
                                        value={accountInfo.password}
                                        onChangeText={(value) => { setAccountInfo({ ...accountInfo, password: value }) }} />
                                </View>

                                <TouchableOpacity style={{  alignItems: 'center', justifyContent: 'center' }} onPress ={()=>{passwordRef.current.focus()}}>
                                    <AntDesign
                                        name  = {"edit"}
                                        size = {25}
                                        color= {colors.text}
                                    />
                                </TouchableOpacity>
                            </View>
                        </Bg>
                    </View>

                    <View style={{ margin: 10 }}>
                        <View style={{ marginVertical: 10, marginLeft: 10 }}>
                            <AppText fontSize={15}>Address:</AppText>
                        </View>
                        <Bg padding={10}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', height: 30, marginHorizontal: 5}}>
                                <Image
                                    source={require('../../assets/location.png')}
                                    style={{ height: 20, width: 20 }}
                                    resizeMode= {"contain"}
                                />
                                <View style={{ flex: 1, marginHorizontal: 10 }}>
                                    <TextInput
                                        ref = {addressRef}
                                        placeholderTextColor = {colors.text}
                                        style={{flex: 1, fontSize: 12, fontFamily: fonts.regulr, color: colors.text, paddingVertical: 0}}
                                        placeholder={"12 street, Peru, Philippine"}
                                        value={accountInfo.address}
                                        onChangeText={(value) => { setAccountInfo({ ...accountInfo, address: value }) }} />
                                </View>

                                <TouchableOpacity style={{  alignItems: 'center', justifyContent: 'center' }} onPress ={()=>{addressRef.current.focus()}}>
                                    <AntDesign
                                        name  = {"edit"}
                                        size = {25}
                                        color= {colors.text}
                                    />
                                </TouchableOpacity>
                            </View>
                        </Bg>
                    </View>

                    <Button lable = {"Save"} style={{backgroundColor: "black", marginVertical: 20}} isLoading = {isLoading} onPress={()=>{
                        setIsLoading(true);
                        setTimeout(() => {
                            setIsLoading(false);
                            showMessage({
                                message: "Your data has been saved successfully",
                                type: "success",
                                backgroundColor: colors.green
                            })
                        }, 1000);
                    }}/>

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
})