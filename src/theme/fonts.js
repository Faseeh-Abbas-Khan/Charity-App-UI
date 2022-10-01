import { Platform } from "react-native"

const fonts = {

    rbold: "Roboto-Medium",
    // rRgular:  "Roboto-Regular",
    bold: Platform.OS == "ios"?"SegoeUI-Bold":"segoe-ui-bold",
    regulr: "Roboto-Regular",


}


export default fonts