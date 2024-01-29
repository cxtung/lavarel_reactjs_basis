import { axiosInstance } from "./axiosInstance";

export const productApi = {
    getAll(params) {
        var url = '/products';
        // eslint-disable-next-line no-undef
        return axiosInstance.get(url, { params })
    },
    get(id) {
        var url = `/products/${id}`;
        // eslint-disable-next-line no-undef
        return axiosInstance.get(url)
    },
    add(data) {
        var url = `/products`
        // eslint-disable-next-line no-undef
        return axiosInstance.post(url, data)
    },
    update(id, data) {
        var url = `/products/${id}`
        // eslint-disable-next-line no-undef
        return axiosInstance.put(url, data)
    },
    del(id) {
        var url = `/products/${id}`
        // eslint-disable-next-line no-undef
        return axiosInstance.delete(url)
    }
}