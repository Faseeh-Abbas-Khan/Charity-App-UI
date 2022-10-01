import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
// import { colors } from '../../theme';
import { useTheme } from '@react-navigation/native';
import fonts from '../../theme/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import AppText from '../../components/AppText'

export default function index({ icon = false, lable, onPress, style = {}, lableStyle = {}, disable = false, isLoading = false, isGradient = false }) {
  const { colors } = useTheme()
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: colors.primary }, style]} onPress={onPress} disable={disable}>
      {
        isLoading ?
          <ActivityIndicator color={'white'} />
          : isGradient ? (
            <MaskedView
              style={{ flex: 0.2 }}
              maskElement={
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <AppText>
                    {lable}
                  </AppText>
                </View>
              }
            >
              <LinearGradient style={{ flex: 1, height: '100%', }} colors={['#DB74C7', '#F3B35D']}></LinearGradient>
            </MaskedView>
          ) : (
            <Text style={[styles.btnText, { color: colors.white }]}>{lable}</Text>
          )

      }
      {
        icon ?
          <MaskedView
            style={{ flex: 0.1, marginLeft: '-3%' }}
            maskElement={
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  justifyContent: 'center',
                  alignItems: 'center',

                }}
              >
                <Ionicons name={"share-social-sharp"} color={colors.text} size={20} style={{ marginLeft: 10, top: 1 }} />
              </View>
            }
          >
            <LinearGradient style={{ flex: 1, height: '100%', }} colors={['#DB74C7', '#F3B35D']}></LinearGradient>
          </MaskedView>
          :
          <></>
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {

    minHeight: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  btnText: {
    fontFamily: fonts.bold,
    fontSize: 16
  }
});
