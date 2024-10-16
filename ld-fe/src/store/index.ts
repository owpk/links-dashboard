import { atom, selector, selectorFamily } from "recoil";
import { buttonRestClient } from "../rest/index";

export interface ButtonProps {
    id?: string
    name: string
    url: string
    title?: string
    body?: string
    image_link: string
}

export const fetchAllButtonsSelector = selectorFamily({

    key: 'fetchAllButtonsSelector',

    get: path => async () => {
        const data = await buttonRestClient.fetchAllButtons(path as string);
        return data.data;
    }
})

export const buttonsState = atom<ButtonProps[]>({
    key: "buttons",
    default: fetchAllButtonsSelector("buttons")
})

export const infoValue = selector({
    key: "infoValue",
    get: ({ get }) => ({
        total: get(buttonsState).length
    })
})
