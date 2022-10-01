import {StyleSheet} from 'react-native';
import  colors  from './colors';
import fonts from './fonts';


const  text = StyleSheet.create({

    small: {
        fontSize: 14,
        color: colors.black,
        fontFamily: fonts.regulr,
        letterSpacing: .5,
    },
    regular: {
        fontSize: 16,
        color: colors.black,
        fontFamily: fonts.regulr,
        letterSpacing: .5,
    },
    bold: {
        fontSize: 16,
        color: colors.black,
        fontFamily: fonts.bold,
        letterSpacing: .5,
    },

})

const  heading = StyleSheet.create({

    h1: {
        fontSize: 30,
        color: colors.black,
        fontFamily: fonts.bold,
        letterSpacing: .5,
    },
    h2: {
        fontSize: 28,
        color: colors.black,
        fontFamily: fonts.bold,
        letterSpacing: .5,
    },
    h3: {
        fontSize: 26,
        color: colors.black,
        fontFamily: fonts.bold,
        letterSpacing: .5,
    },
    h4: {
        fontSize: 24,
        color: colors.black,
        fontFamily: fonts.bold,
        letterSpacing: .5,
    },
    h5: {
        fontSize: 22,
        color: colors.black,
        fontFamily: fonts.bold,
        letterSpacing: .5,
    },
    h6: {
        fontSize: 20,
        color: colors.black,
        fontFamily: fonts.regulr,
        letterSpacing: .5,
    },

})

export default {
    text,
    heading
}