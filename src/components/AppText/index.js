import { Text } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import fonts from '../../theme/fonts';

export default function index({children,fontFamily= fonts.bold, fontSize = 15,color =false, textAlign = "left", adjustsFontSizeToFit=false, allowFontScaling = false, numberOfLines = undefined}) {
    const {colors} = useTheme();
    return (
  
        <Text 
            adjustsFontSizeToFit = {adjustsFontSizeToFit}
            allowFontScaling  = {allowFontScaling}
            numberOfLines = {numberOfLines}
            
            style={{
                fontSize: fontSize,
                textAlign: textAlign,
                fontFamily: fontFamily,
                color: color?color:colors.text,
                lineHeight: fontSize + 5
            }}
        >{children}</Text>

    )
}
