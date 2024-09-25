import { atom, selector } from "recoil";
import { buttonRestClient } from "../rest/index";

export interface ButtonProps {
    id?: string
    name: string
    url: string
    image_link: string
}

export const fetchAllButtonsSelector = selector({

    key: 'fetchAllButtonsSelector',

    get: async () => {
        const data = await buttonRestClient.fetchAllButtons();
        return data.data;
    }
})

export const buttonsState = atom<ButtonProps[]>({
    key: "buttons",
    default: fetchAllButtonsSelector
})

export const infoValue = selector({
    key: "infoValue",
    get: ({ get }) => ({
        total: get(buttonsState).length
    })
})
