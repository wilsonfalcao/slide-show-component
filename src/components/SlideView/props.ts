import { IImageSource, IImageSourceArray } from ".";
import { ImageSource } from "./SourceImage";

export type FunctionRender = (param: IImageSource) => any;

export interface IInitializeParameters{
    Title: String;
    Time: number;
    Data: IImageSourceArray;
    renderItem: FunctionRender
}

export const InitializeParameters: IInitializeParameters = {
    Title: "", 
    Time: 50000,
    Data: ImageSource,
    renderItem: (item: IImageSource) => null
}