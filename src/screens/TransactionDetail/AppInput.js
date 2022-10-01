import { Animated, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useRef, useState } from 'react';

import AppText from '../../components/AppText';
import { useTheme } from '@react-navigation/native';
import fonts from '../../theme/fonts';



export default function AppInput({ placeholder, onChangeText, value, isPassword = false }) {

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
    outputRange: [17, -5],
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

  React.useEffect(() => {
    moveTextTop()
  }, [])

  return (

    <View style={[styles.inputContainer, { borderBottomColor: colors.text }]}>
      <Animated.View style={[styles.animatedStyle, animStyle]}>
        <AppText fontSize={12} fontFamily={fonts.regulr}>{placeholder}</AppText>
      </Animated.View>
      <TextInput
        style={[styles.input, { color: colors.text }]}
        editable={false}
        // onFocus={() => { moveTextTop() }}
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
    height: 45,
    borderBottomWidth: 1,
    marginBottom: 15
  },
  input: {
    height: "100%",
    paddingBottom: 0,
    paddingTop: 10,
    // backgroundColor: 'red',
    left: 8,
    fontSize: 16,
    fontFamily: fonts.bold
  },
  animatedStyle: {
    top: 5,
    left: 8,
    position: 'absolute',
    borderRadius: 90,
    zIndex: -1,
  },
});
