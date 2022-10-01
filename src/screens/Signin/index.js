import { ActivityIndicator, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppInput from '../../components/AppInput'
import AppText from '../../components/AppText'
import AppHeader from '../../components/AppHeader'
import Bg from '../../components/Bg'
import { constants } from '../../theme';
import { useTheme } from '@react-navigation/native'
import TouchID from 'react-native-touch-id';
import FaceID from 'react-native-touch-id';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import { showMessage } from 'react-native-flash-message'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/Button'


GoogleSignin.configure({
  client_type: '1070868937636-m1tretpl1h0mbalce87gnu88r3miq1vk.apps.googleusercontent.com'
});

const optionalConfigObject = {
  title: 'Authentication Required', // Android
  imageColor: '#e00606', // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Touch sensor', // Android
  sensorErrorDescription: 'Failed', // Android
  cancelText: 'Cancel', // Android
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: true, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};


export default function Index({ navigation }) {
  const [isLoading, setIsLoading] = React.useState(false)
  const { colors } = useTheme()
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });
  const [isFaceSupported, setIsFaceSupported] = React.useState(false)

  const setUserName = async (value) => {
    try {
      await AsyncStorage.setItem('userName', value)
    } catch (e) {
      console.log(e)
    }
  }


  const _pressHandler = () => {
    {
      !isFaceSupported ? (
        TouchID.authenticate('', optionalConfigObject)
        .then(success => {
          alert('Authenticated Successfully');
          navigation.replace("Main");
        })
        .catch(error => {
          console.log(error)
          alert('Authentication Failed');
        })
      ) : (
        FaceID.authenticate('', optionalConfigObject)
        .then(success => {
          alert('Authenticated Successfully');
          navigation.replace("Main");
        })
        .catch(error => {
          console.log(error)
          alert('Authentication Failed');
        })
      )
    }
    
  }

  const googleHandler = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const tokens = await GoogleSignin.getTokens();
      console.log(userInfo);
      console.log(tokens);
      setUserName(userInfo.user.name)
      navigation.replace("Main");

    } catch (error) {
      //navigation.navigate("Main");
      console.log(error, '----');
    }
  };

  async function onAppleButtonPress() {
    // performs login request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // get current authentication state for user
    // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
    const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

    // use credentialState response to ensure the user is authenticated
    if (credentialState === appleAuth.State.AUTHORIZED) {
      // user is authenticated
    }
  }

  const loginWithfacebookHandler = () => {
    // if(LoginManager.getInstance()!=null){
    // LoginManager.getInstance().logOut();
    // }
    // console.log(LoginManager.getI)
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ' +
            result.grantedPermissions.toString(),
          );
          AccessToken.getCurrentAccessToken().then(data => {
            console.log(data);
            const { accessToken } = data;
            navigation.navigate("Main");
            // initUser(accessToken);
          });

        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
        showMessage({
          type: 'info',
          message: 'Login failed.Please try again',
        });
      },
    );
  };

  React.useEffect(()=>{
        TouchID.isSupported(optionalConfigObject)
          .then(biometryType => {
        // Success code
          if (biometryType === 'FaceID')
            setIsFaceSupported(true)
          else
            setIsFaceSupported(false)
          })
      .catch(error => {
        // Failure code
        console.log(error);
      });
  },[])

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <AppHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps='handled'>
        <View style={{ alignSelf: 'center' }}>
          <AppText fontSize={30} >Sign In</AppText>
        </View>
        <View style={styles.container}>
          <View style={styles.formMargin}>
            <AppInput placeholder={"Username/email"} value={state.email} onChangeText={(value) => { setState({ ...state, email: value }) }} />
          </View>
          <View style={styles.formMargin}>
            <AppInput placeholder={"Password"} value={state.password} onChangeText={(value) => { setState({ ...state, password: value }) }} isPassword />
          </View>

          <Button style={{ marginVertical: 20, backgroundColor: "black", borderRadius: 10 }} lable={`Sign in`}
            disabled={isLoading}
            isLoading={isLoading}
            onPress={() => {
              if (!state.email || !state.password) {
                setIsLoading(true)
                showMessage({
                  message: "Please Enter Login Info",
                  type: "danger",
                  backgroundColor: "#D41B46"
                })
                setTimeout(() => {
                  setIsLoading(false)
                }, 1000);
              }
              else {
                setIsLoading(true)
                setTimeout(() => {
                  setIsLoading(false)
                  const name = state.email
                  setUserName(name)
                  navigation.replace('Main')
                }, 1000);
              }
            }
            } />

          <View style={{ alignSelf: 'center', marginVertical: 18 }}>
            <AppText fontSize={15}>Sign in with</AppText>
          </View>

          <TouchableOpacity onPress={googleHandler}>
            <Bg padding={15} style={[styles.formMargin, { flexDirection: "row", alightItems: 'center' }]}>

              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image source={require("../../assets/google.png")} style={{ height: 25, width: 25 }} resizeMode={"contain"} />
              </View>
              <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', marginRight: '20%' }}>
                <AppText fontSize={12} >Google</AppText>
              </View>
            </Bg>
          </TouchableOpacity>

          <TouchableOpacity onPress={loginWithfacebookHandler}>
            <Bg padding={15} style={[styles.formMargin, { flexDirection: "row", alightItems: 'center' }]}>

              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image source={require("../../assets/facebook.png")} style={{ height: 25, width: 25 }} resizeMode={"contain"} />
              </View>
              <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', marginRight: '20%' }}>
                <AppText fontSize={12} >Facebook</AppText>
              </View>
            </Bg>
          </TouchableOpacity>

          {/* <TouchableOpacity>
            <Bg padding={15} style={[styles.formMargin, { flexDirection: "row", alightItems: 'center' }]}>

              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image source={require("../../assets/appleLogo.png")} style={{ height: 25, width: 25, tintColor: colors.text }} resizeMode={"contain"} />
              </View>
              <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', marginRight: '20%' }}>
                <AppText fontSize={12} >Apple</AppText>
              </View>
            </Bg>
          </TouchableOpacity> */}

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 20 }}>

      {
          isFaceSupported ? (
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={_pressHandler}>
              <Bg padding={30} style={{ alignSelf: "center" }}>
                <Image source={require("../../assets/face.png")} style={{ height: 35, width: 35 }} resizeMode={"contain"} />
              </Bg>
              {/* <View style={{ marginVertical: 5 }}>
                <AppText fontSize={12}>Face ID</AppText>
              </View> */}
            </TouchableOpacity>
                ) : (
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={_pressHandler}>
              <Bg padding={30} style={{ alignSelf: "center" }}>
                <Image source={require("../../assets/fingre.png")} style={{ height: 35, width: 35 }} resizeMode={"contain"} />
              </Bg>
              {/* <View style={{ marginVertical: 5 }}>
                <AppText fontSize={12}>Touch ID</AppText>
              </View> */}
            </TouchableOpacity>
                )
      }
            

            {/* <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 30 }}>
              <AppText>or</AppText>
            </View> */}

            
          </View>

        </View>

      </ScrollView>
    </SafeAreaView >
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