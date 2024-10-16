import { AxiosResponse } from "axios";
import { ButtonProps } from "../store";

export interface ButtonRestClientI {
    fetchAllButtons(sub: string): Promise<AxiosResponse<ButtonProps[]>>;
    saveAll(button: ButtonProps, sub: string): Promise<AxiosResponse<ButtonProps>>;
    updateById(button: ButtonProps, sub: string): Promise<AxiosResponse<Boolean>>;
    deleteById(id: string, sub: string): Promise<AxiosResponse<Boolean>>;
}