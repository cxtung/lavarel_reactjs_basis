import { axiosInstance } from "./axiosInstance"

export const categoryApi = {
    getAll(params) {
        var url = '/categories';
        // eslint-disable-next-line no-undef
        return axiosInstance.get(url, { params })
    },
    get(id) {
        var url = `/categories/${id}`;
        // eslint-disable-next-line no-undef
        return axiosInstance.get(url)
    },
    add(data) {
        var url = `/categories`
        // eslint-disable-next-line no-undef
        return axiosInstance.post(url, data)
    },
    update(id, data) {
        var url = `/categories/${id}`
        // eslint-disable-next-line no-undef
        return axiosInstance.put(url, data)
    },
    del(id) {
        var url = `/categories/${id}`
        // eslint-disable-next-line no-undef
        return axiosInstance.delete(url)
    }
}