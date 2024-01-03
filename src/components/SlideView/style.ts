import {StyleSheet, Dimensions} from "react-native";

export const WIDTH = Dimensions.get("window").width;
export const HIGHT = Dimensions.get("window").height;
export const ITEM_SIZE = WIDTH * 0.72;
export const SPACING = 5;

export const slideViewStyle = StyleSheet.create({

    container: {
        flex:1
    },
    slideContainer:{
        width: ITEM_SIZE
    },
    slideInner:{
        alignItems:"center",
        marginHorizontal: SPACING,
        padding:SPACING,
        backgroundColor:"rgb(255,255,255)",
        borderRadius:34
    },
    posterSlide:{
        width: "100%",
        height: ITEM_SIZE * 1.2,
        resizeMode: "cover",
        borderRadius: 34,
        margin: 0,
        marginBottom: 10,
    },
    flatlistSlide:{
        alignItems:"center"
    },
    spacerLimitSlide:{
        height: 200,
        width:(WIDTH - ITEM_SIZE) /3,
    },
    TitleHeader:{
        width:"auto",
        height:40,
        alignItems:"center",
        justifyContent:"center",
    },

});