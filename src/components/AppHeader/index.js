import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useTheme } from '@react-navigation/native';

export default function Index() {
    const navigation = useNavigation();
    const { colors } = useTheme();
    return (
        <View style={styles.container}>
            {
                navigation.canGoBack() ?
                    <TouchableOpacity
                        style={{ padding: 10 }}
                        onPress={() => { navigation.goBack() }}>
                        <AntDesign name={"arrowleft"} color={colors.primary} size={25} />
                    </TouchableOpacity>
                    : <></>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    }
})