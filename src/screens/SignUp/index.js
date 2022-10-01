import { Image, SafeAreaView, ScrollView, StyleSheet, ActivityIndicator, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppInput from '../../components/AppInput'
import AppHeader from '../../components/AppHeader'
import AppText from '../../components/AppText'
import Bg from '../../components/Bg'
import { constants } from '../../theme';
import { showMessage, hideMessage } from "react-native-flash-message";
import { useTheme } from '@react-navigation/native'
import Button from '../../components/Button'


export default function Index({ navigation }) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <AppHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps='handled'>
        <View style={{ alignSelf: 'center' }}>
          <AppText fontSize={30} >Sign Up</AppText>
        </View>
        <View style={styles.container}>
          <View style={styles.formMargin}>
            <AppInput placeholder={"First Name"} value={state.firstName} onChangeText={(value) => { setState({ ...state, firstName: value }) }} />
          </View>
          <View style={styles.formMargin}>
            <AppInput placeholder={"Last Name"} value={state.lastName} onChangeText={(value) => { setState({ ...state, lastName: value }) }} />
          </View>
          <View style={styles.formMargin}>
            <AppInput placeholder={"Email"} value={state.email} onChangeText={(value) => { setState({ ...state, email: value }) }} />
          </View>
          <View style={styles.formMargin}>
            <AppInput placeholder={"Password"} value={state.password} onChangeText={(value) => { setState({ ...state, password: value }) }} isPassword />
          </View>
          <View style={styles.formMargin}>
            <AppInput placeholder={"Confirm Password"} value={state.confirmPassword} onChangeText={(value) => { setState({ ...state, confirmPassword: value }) }} isPassword />
          </View>

          <Button style={{ marginVertical: 20, backgroundColor: "black", borderRadius: 10 }} lable={`Register`}
            isLoading={isLoading}
            onPress={() => {
              setIsLoading(true)
              setTimeout(() => {
                setIsLoading(false)
                showMessage({
                  message: 'Your account has been successfully created.',
                  type: "success",
                  backgroundColor: colors.green
                })
                navigation.navigate("Signin")
              }, 1000);

            }} disabled={isLoading} />


          <View style={{ alignItems: 'center', marginTop: '20%' }}>
            <Image source={require('../../assets/Register.png')} style={{ height: 45, width: 70 }} />
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: constants.CONTAINER
  },
  formMargin: {
    marginVertical: 10
  }
})