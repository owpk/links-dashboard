import axios, {AxiosResponse} from "axios";
import { ButtonProps } from "../store";

class RestClient {

    async put(id: string, button: ButtonProps): Promise<AxiosResponse<Boolean>> {
        throw new Error("Method not implemented.");
    }

    async get<T>(url: string): Promise<AxiosResponse<T>> {
        console.log("fetching: " + url)
        return await axios.get<T>(url)
    }

    async post<T, X>(url: string, body: X): Promise<AxiosResponse<T>> {
        console.log(`posting: ${url}, ${body}`)
        return await axios.post(url, body)
    }

    async delete<T>(url: string): Promise<AxiosResponse<T>> {
        console.log(`deleting: ${url}`)
        return await axios.delete(url)
    }

}

export const restClient = new RestClient();