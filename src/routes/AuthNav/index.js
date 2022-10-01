import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Welcome from '../../screens/Welcome';
import Signin from '../../screens/Signin';
import SignUp from '../../screens/SignUp';
const Stack = createNativeStackNavigator();

export default function Index() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
