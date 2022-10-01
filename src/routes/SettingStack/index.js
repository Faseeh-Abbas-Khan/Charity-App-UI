import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import SettingScreens from '../../screens/SettingScreens';
import AccountInfo from '../../screens/AccountInfo';
import History from '../../screens/History';
import PaymentInfo from '../../screens/PaymentInfo';
import Appearance from '../../screens/Appearance';
import Aboutus from '../../screens/Aboutus';
import Howitworks from '../../screens/Howitworks';

const Stack = createNativeStackNavigator();
export default function Index() {
    return (
        // <Stack.Navigator screenOptions={{animation: "none"}}>
        <Stack.Navigator screenOptions={{}}>
            <Stack.Screen name="SettingScreens" component={SettingScreens} options={{ headerShown: false }} />
            <Stack.Screen name="Account Info" component={AccountInfo} options={{ headerShown: false }} />
            <Stack.Screen name="History" component={History} options={{ headerShown: false }} />
            <Stack.Screen name="Payment Info" component={PaymentInfo} options={{ headerShown: false }} />
            <Stack.Screen name="Appearance" component={Appearance} options={{ headerShown: false }} />
            <Stack.Screen name="About us" component={Aboutus} options={{ headerShown: false }} />
            <Stack.Screen name="How it works" component={Howitworks} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

