import { Animated, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { constants } from '../../theme';
import Bg from '../Bg';
import AppText from '../AppText';
import { useTheme } from '@react-navigation/native';
import fonts from '../../theme/fonts';



export default function Index({ placeholder, onChangeText, value, isPassword = false }) {

  const [isFocus, setIsFocus] = useState(false);
  const moveText = useRef(new Animated.Value(0)).current;
  const { colors, dark } = useTheme();
  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [17, 4],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };

  const onFocusHandler = () => {
    setIsFocus(!isFocus)
  }


  return (
    <Bg padding={1}>
      <View style={[styles.inputContainer]}>
        <Animated.View style={[styles.animatedStyle, animStyle]}>
          <AppText fontSize={12} fontFamily={fonts.regulr}>{placeholder}</AppText>
        </Animated.View>
        <TextInput
          style={[styles.input, { color: colors.text }]}
          onFocus={() => { moveTextTop() }}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={isPassword}
          // placeholder  = {isFocus?"":placeholder}
          onBlur={() => {
            if (value == "") {
              moveTextBottom();
            }
          }}
          selectionColor={colors.blue}
        />
        {
          isPassword ?
            <View></View>
            : <></>
        }
      </View>
    </Bg>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  inputContainer: {
    borderRadius: 10,
    height: 50,
  },
  input: {
    height: "100%",
    paddingBottom: 0,
    paddingTop: 10,
    left: 18,
    fontSize: 12,
    fontFamily: fonts.regulr
  },
  animatedStyle: {
    top: 0,
    left: 18,
    position: 'absolute',
    borderRadius: 90,
    zIndex: -1,
  },
});
