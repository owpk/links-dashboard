import { AxiosResponse } from "axios";
import { ButtonProps } from "../store";

export interface ButtonRestClientI {
    fetchAllButtons(): Promise<AxiosResponse<ButtonProps[]>>;
    saveAll(button: ButtonProps): Promise<AxiosResponse<ButtonProps>>;
    updateById(button: ButtonProps): Promise<AxiosResponse<Boolean>>;
    deleteById(id: string): Promise<AxiosResponse<Boolean>>;
}