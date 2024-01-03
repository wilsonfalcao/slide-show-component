import { StyleSheet } from "react-native";
import { IStyleGlobal } from "../../global/interfaces/IStyleGlobal";

export const LayoutStyle = StyleSheet.create<IStyleGlobal>({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title_text: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 16,
    },
    adivise_text:{
        fontSize: 20,
        backgroundColor:"rgb(255,24,45)",
        color:"#fff",
    }
});