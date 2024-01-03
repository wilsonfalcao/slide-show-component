import { Animated } from "react-native";
import { slideViewStyle, ITEM_SIZE } from "./style";

export interface IInterpolation {

    translateYRange: Array<number>;
    opacityRannge: Array<number>;
    extrapolate: Animated.ExtrapolateType;
}

// Props da animação
const PropsAnimatedOutPut: IInterpolation = {
    translateYRange: [-30, 70, -30],
    opacityRannge: [1, 1, 1],
    extrapolate: "clamp"
};

export const SlideShowTransition = (time: number, length:number) => {

    const timeOutTransition = (value:number, flatListRef: any) =>{

        setTimeout(() => {

            if ((value + ITEM_SIZE) > ((ITEM_SIZE - slideViewStyle.spacerLimitSlide.width - 1) * (length - 2))) {
    
                flatListRef.current?.scrollToOffset({
                    offset: 0,
                    animated: true
                });
            }
    
            if ((value + ITEM_SIZE) <= ((ITEM_SIZE - slideViewStyle.spacerLimitSlide.width - 1) * (length - 2))) {
                
                flatListRef.current?.scrollToOffset({
                    offset: (value + ITEM_SIZE),
                    animated: true
                });

            }
    
        }, time);
    }

    const interpolateValues = (index: number, AnimationValue: Animated.Value, outPutRange: IInterpolation = {...PropsAnimatedOutPut} ) =>{

        const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
        ];

        const translateY = AnimationValue.interpolate({
            inputRange,
            outputRange: outPutRange.translateYRange,
            extrapolate: outPutRange.extrapolate
        });

        const opacity = AnimationValue.interpolate({
            inputRange,
            outputRange: outPutRange.opacityRannge,
            extrapolate: outPutRange.extrapolate
        });

        return {
            translateY,
            opacity
        }
    }

    return {
        timeOutTransition, 
        interpolateValues
    };
}