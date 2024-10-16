import { AxiosResponse } from "axios";
import React from "react";
import { ButtonProps } from "../store";
import { ButtonRestClientI } from "./ButtonsRestClientI";

let mockData:ButtonProps[] = [
        {id: "1", name: "test3 Lorem ipsum", body: "pass: 1234 | login: owpk", title: "test1", url: "test3", image_link: "https://png.pngtree.com/element_our/20190530/ourmid/pngtree-correct-icon-image_1267804.jpg"},
        {id: "2", name: "test3 Lorem ipsum", body: "pass: 1234 | login: owpk", title: "test1", url: "test3", image_link: "https://png.pngtree.com/element_our/20190530/ourmid/pngtree-correct-icon-image_1267804.jpg"},
        {id: "3", name: "test3 Lorem ipsum", body: "pass: 1234 | login: owpk", title: "test1", url: "test3", image_link: "https://png.pngtree.com/element_our/20190530/ourmid/pngtree-correct-icon-image_1267804.jpg"}
]

export class MockButtonsRestClient extends
    React.Component<{}, {mockData: ButtonProps[]}>
    implements ButtonRestClientI {

    constructor() {
        super({});
        this.state = {
            mockData
        }
    }

    fetchAllButtons(): Promise<AxiosResponse<ButtonProps[]>> {
        return Promise.resolve({
            data: this.state.mockData,
            status: 200,
            statusText: "OK",
            headers: {},
            config: {}
        })
    }

    saveAll(button: ButtonProps): Promise<AxiosResponse<ButtonProps>> {
        this.state.mockData.push(button);

        return Promise.resolve({
            data: button,
            status: 200,
            statusText: "OK",
            headers: {},
            config: {}
        });
    }

    updateById(button: ButtonProps): Promise<AxiosResponse<Boolean>> {
        return Promise.resolve({
            data: true,
            status: 200,
            statusText: "OK",
            headers: {},
            config: {}
        });
    }

    deleteById(id: string): Promise<AxiosResponse<Boolean>> {

        this.setState({
            mockData: this.state.mockData.filter(x => x.id !== id)
        });

        return Promise.resolve({
            data: true,
            status: 200,
            statusText: "OK",
            headers: {},
            config: {}
        });
    }
}