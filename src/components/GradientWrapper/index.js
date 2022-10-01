import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

export default function index({children, style = {}, size= 42}) {
    return (
        <View style={[{
            width: size, 
            height:size,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },style]}>
        <LinearGradient colors={['#DB74C7', '#F3B35D']} style={{
            width: size, 
            height:size,
            alignItems: 'center', 
            justifyContent: 'center', 
            borderRadius: 100,
        }}>
            {children}
        </LinearGradient>    
        </View>
    )
}