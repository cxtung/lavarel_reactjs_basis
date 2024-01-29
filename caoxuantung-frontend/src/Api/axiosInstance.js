import axios from "axios";
import { AppUrl } from "./AppUrl";

const configInstance = {
    // eslint-disable-next-line no-undef
    baseURL: AppUrl.BaseURL,
    headers: {
        // eslint-disable-next-line no-undef
        'Authorization': `Bearer ${AppUrl.token}`,
        'Content-Type': 'application/json'
    },
};
// eslint-disable-next-line no-undef
export const axiosInstance = axios.create(configInstance);
