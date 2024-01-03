import { NativeModules } from "react-native";
import { LanguageData } from "./language";
import { SetLanguageProps } from "./interfaces/ISetLanguageProps";

const locale = NativeModules.I18nManager.localeIdentifier

declare global {
    var text: SetLanguageProps;
}

global.text = LanguageData[locale as keyof typeof LanguageData];