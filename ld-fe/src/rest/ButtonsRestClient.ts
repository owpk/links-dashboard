import { restClient } from "./RestClient";
import { AxiosResponse } from "axios";
import { baseUrl } from "./Constants";
import { ButtonProps } from "../store";
import { ButtonRestClientI } from "./ButtonsRestClientI";

export class ButtonRestClient implements ButtonRestClientI {

    sub: string = "buttons"

    updateById(button: ButtonProps): Promise<AxiosResponse<Boolean>> {
        return restClient.put(`${baseUrl}/${this.sub}?id=${button.id}`, button);
    }

    fetchAllButtons(): Promise<AxiosResponse<ButtonProps[]>> {
        return restClient.get(`${baseUrl}/${this.sub}`);
    }

    saveAll(button: ButtonProps): Promise<AxiosResponse<ButtonProps>> {
        return restClient.post(`${baseUrl}/${this.sub}`, button);
    }

    deleteById(id: string): Promise<AxiosResponse<Boolean>> {
        return restClient.delete(`${baseUrl}/${this.sub}?id=${id}`)
    }
}

