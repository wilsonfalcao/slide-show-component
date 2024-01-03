
import { languageUS } from "./en-us/data"
import { languageBR } from "./pt-br/data"
import { SetLanguageProps } from "../interfaces/ISetLanguageProps";


type ILanguageData = {
    en_US: SetLanguageProps;
    pt_BR:SetLanguageProps;
}

export const LanguageData: ILanguageData = {

    en_US:languageUS,
    pt_BR:languageBR,

}