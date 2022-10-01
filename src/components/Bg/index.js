import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

export default function Index({ children, padding = 5, style = {} }) {
  const { colors, } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.card, padding }, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginHorizontal: 2,
    // width: "100%"
  }
})