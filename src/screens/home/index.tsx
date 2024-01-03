// Importação de recursos para view
import React from "react";
import { View, Text } from "react-native";
import { StyleHome } from "./style";

import SlideView from "../../components/SlideView";

const Home: React.FC = () => {

    return (
        <View style={StyleHome.container}>
            <SlideView 
                Title={"Slide Show Example"} 
                Time={5000}
                renderItem={(item) =>
                    <Text>ID: {item.id}</Text> 
                }
            />
        </View>
    );
}

export default Home;