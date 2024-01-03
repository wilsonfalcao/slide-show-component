export interface SetLanguageProps{
    
    idiome: String;
    version: String;
    translator: String;
    example: String;
    data: DataObjectProps;
}

// Contrato para objeto principal de tradução
export interface DataObjectProps {

    label: SetContractToTranslateLabels

}

// Contrato para todos os objetos da classe Label
export interface SetContractToTranslateLabels {

    label01290: String;

}