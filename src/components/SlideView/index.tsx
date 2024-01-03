import React, { useEffect, useRef } from "react";

// Compoenentes do Nativos
import {
    View,
    StatusBar,
    Image,
    FlatList,
    Animated,
    Text
} from "react-native";

// Inicializadores
import { InitializeParameters, IInitializeParameters } from "./props";

// Estilos e animação
import { slideViewStyle, ITEM_SIZE } from "./style";
import {SlideShowTransition} from "./animated";

// Tipo de variável para array image
export interface IImageSource {
    id: number;
    title: string;
    source: string;
    navigate: any;
}
export type IImageSourceArray = IImageSource[];


const SlideView: React.FC<IInitializeParameters> = ({
    Title,
    Time,
    renderItem,
    Data = InitializeParameters.Data
}) => {

    const scrollX = useRef(new Animated.Value(0)).current;
    const FlatlistAnimatedRef = useRef<FlatList>(null);
    const {timeOutTransition, interpolateValues} = SlideShowTransition(5000, Data.length);

    useEffect(() => {
        scrollX.addListener(({ value }) => timeOutTransition(value, FlatlistAnimatedRef));
    });

    // Component
    const slideBody = ({
        item,
        index,
    }: { item: any, index: number }) => {

        // Recuperando valores da animação
        const {translateY, opacity} = {...interpolateValues(index,scrollX)};

        if (index === 0 || index === Data.length - 1) {
            return <View style={slideViewStyle.spacerLimitSlide} />
        }

        return (
            <Animated.View key={item.id} style={[
                slideViewStyle.slideContainer,
                {
                    transform: [{
                        translateY,
                    }],
                    opacity: opacity
                }
            ]}>

                <View key={`A-${item.id}`} style={[slideViewStyle.slideInner]}>

                    {/** Header of post */}
                    <Image key={`IMG-${item.id}`} source={{ uri: item.source }} style={slideViewStyle.posterSlide} />
                    <Text>{item.title}</Text>
                    
                    {/** Children of post */}
                    {renderItem(item)}
                </View>
            </Animated.View>
        );
    }

    // Transmed Image
    const TraformedImage = [
        {},
        ...Data,
        {}
    ];

    return (
        <View style={slideViewStyle.container}>
            
            <StatusBar hidden />

            <View style={slideViewStyle.TitleHeader}>
                <Text>{ Title }</Text>
            </View>

            <Animated.FlatList
                horizontal
                data={TraformedImage}
                ref={FlatlistAnimatedRef}
                initialScrollIndex={0}
                showsVerticalScrollIndicator={false}
                snapToInterval={ITEM_SIZE}
                bounces={false}
                contentContainerStyle={[slideViewStyle.flatlistSlide]}
                keyExtractor={(index, _) => _.toString()}
                onScrollBeginDrag={() => {
                    
                    scrollX.removeAllListeners();
                }}
                // Animated
                onScroll={Animated.event(
                    [{

                        nativeEvent: {
                            contentOffset: { x: scrollX }
                        }
                    }],
                    { useNativeDriver: true },
                )}
                renderItem={slideBody}
                scrollEventThrottle={16}
            />

        </View>
    );
}

export default SlideView;