import 'react-native-gesture-handler'
import * as React from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer, useTheme } from '@react-navigation/native';
import { colors } from './src/theme';
import { StatusBar, useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



//SCREENS
import SplashScreen from './src/screens/SplashScreen';

//Navigation
import AuthNav from './src/routes/AuthNav'
import TabNav from './src/routes/TabNav'
import TransactionDetail from './src/screens/TransactionDetail'
import FlashMessage from "react-native-flash-message";


import MyContext from './src/MyContext';
const Stack = createNativeStackNavigator();
export default function App() {

  const [isSplash, setIsSplash] = React.useState(true);
  const [isSignedIn, setIsSignedIn] = React.useState(true);
  const scheme = useColorScheme();
  const [isDark, setIsDark] = React.useState(scheme == "dark");

  React.useEffect(() => {
    setTimeout(() => {
      setIsSplash(false)
    }, 2000);
  }, []);


  const MyDark = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...colors.darkTheme,
    }
  }

  const MyLight = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...colors.lightTheme,
    }
  }



  if (isSplash) {
    return <SplashScreen theme={isDark ? MyDark : MyLight} />
  }



  return (
    <>
      <StatusBar backgroundColor={isDark ? colors.darkTheme.background : colors.lightTheme.background} barStyle={isDark ? 'light-content' : 'dark-content'} />
      <MyContext.Provider
        value={{
          isDark: isDark,
          toggleTheme: () => {
            setIsDark(!isDark)
          },
        }}
      >
        <NavigationContainer theme={isDark ? MyDark : MyLight}>

          <Stack.Navigator screenOptions={{ animation: "none" }}>
            <Stack.Screen name="Auth" component={AuthNav} options={{ headerShown: false }} />
            <Stack.Screen name="Main" component={TabNav} options={{ headerShown: false }} />
            {/* <Stack.Screen name="TransactionDetail" component={TransactionDetail} options={{ headerShown: false }} /> */}
          </Stack.Navigator>

          {/* {
              !isSignedIn ? (
                <AuthNav />
              ) : (
                <TabNav />
              )
            } */}

        </NavigationContainer>
      </MyContext.Provider>
      <FlashMessage position="top" />
    </>
  );
}