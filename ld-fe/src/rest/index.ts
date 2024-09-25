import { ButtonRestClient } from "./ButtonsRestClient";
import { ButtonRestClientI } from "./ButtonsRestClientI";
import { MockButtonsRestClient } from "./MockButtonsRestClient";

export let buttonRestClient: ButtonRestClientI;
const env = process.env.NODE_ENV as string;

if (env === 'development') {
    buttonRestClient = new MockButtonsRestClient();
} else {
    buttonRestClient = new ButtonRestClient();
}