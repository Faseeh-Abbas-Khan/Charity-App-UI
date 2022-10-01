import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import HomeScreen from '../../screens/HomeScreen';
import CharityOption from '../../screens/CharityOption';
import Groups from '../../screens/Groups';
import Payment from '../../screens/Payment';
import TransactionDetail from '../../screens/TransactionDetail';
import SubOptions from '../../screens/SubOptions'

const Stack = createNativeStackNavigator();
export default function Index() {
    return (
        // <Stack.Navigator screenOptions={{ animation: "none" }}>
        <Stack.Navigator screenOptions={{ }}>
            <Stack.Screen name="MainScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Groups" component={Groups} options={{ headerShown: false }} />
            <Stack.Screen name="CharityOption" component={CharityOption} options={{ headerShown: false }} />
            <Stack.Screen name="SubOptions" component={SubOptions} options={{ headerShown: false }} />
            <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
            <Stack.Screen name="TransactionDetail" component={TransactionDetail} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

