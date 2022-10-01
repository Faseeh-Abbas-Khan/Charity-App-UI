import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, typography } from '../../theme';
import { useTheme } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function index({ theme }) {
  const { colors } = theme
  return (

    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={{ width: "100%", alignItems: 'center', justifyContent: 'center' }}>
        <Animatable.Image animation={'fadeInUp'} source={require('../../assets/logo3.png')} style={{ width: "70%" }} resizeMode={"contain"} />
        {/* <Image source={require('../../assets/logoBg.png')} style={{width: "100%"}} resizeMode = {"contain"} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
