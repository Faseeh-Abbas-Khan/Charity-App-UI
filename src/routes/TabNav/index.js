import * as React from 'react';
import { Image, Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//NavStack
import HomeStack from '../HomeStack'
import Social from '../../screens/Social'
import SettingStack from '../SettingStack'
import { colors } from '../../theme';
import { useTheme } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function Index() {
    const {colors} = useTheme();
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
                height: Platform.OS == "android"?70:90,
            },
            tabBarIcon: ({ focused, color }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = require('../../assets/TabHomeIcon.png');
                    color = focused ? '#63B8CF' : colors.text
                } else if (route.name === 'Social') {
                    iconName = require('../../assets/socialTabIcon.png');
                    color = focused ? '#63B8CF' : colors.text
                } else if (route.name === 'Settings') {
                    iconName = require('../../assets/settingsTabIcon.png');
                    color = focused ? '#63B8CF' : colors.text
                }
                // You can return any component that you like here!
                return <Image source={iconName} style={{ height: 25, width: 25, tintColor: color }} resizeMode={"contain"} />;
            },
            tabBarLabelStyle: {
                marginBottom: 2,
                marginTop: -5
            },
        })}>
            <Tab.Screen name='Home' component={HomeStack} />
            <Tab.Screen name='Social' component={Social} />
            <Tab.Screen name='Settings' component={SettingStack} />
        </Tab.Navigator>
    )
}