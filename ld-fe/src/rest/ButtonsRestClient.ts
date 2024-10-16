import { AxiosResponse } from "axios";
import { ButtonProps } from "../store";
import { ButtonRestClientI } from "./ButtonsRestClientI";
import { baseUrl } from "./Constants";
import { restClient } from "./RestClient";

export class ButtonRestClient implements ButtonRestClientI {
    base: string = "links";

    updateById(button: ButtonProps, sub: string = "buttons"): Promise<AxiosResponse<Boolean>> {
        return restClient.put(`${baseUrl}/${this.base}/${sub}?id=${button.id}`, button);
    }

    fetchAllButtons(sub: string = "buttons"): Promise<AxiosResponse<ButtonProps[]>> {
        return restClient.get(`${baseUrl}/${this.base}/${sub}`);
    }

    saveAll(button: ButtonProps, sub: string = "buttons"): Promise<AxiosResponse<ButtonProps>> {
        return restClient.post(`${baseUrl}/${this.base}/${sub}`, button);
    }

    deleteById(id: string, sub: string = "buttons"): Promise<AxiosResponse<Boolean>> {
        return restClient.delete(`${baseUrl}/${this.base}/${sub}?id=${id}`)
    }
}

