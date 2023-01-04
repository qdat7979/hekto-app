import axiosClient from "./axiosClient";

// export interface IBody {
//     name?: string;
//     email?: string;
//     password?: string;
// }

const authApi = {
    login(id: number) {
        const url = `/users/${id}`
        return axiosClient.get(url)
    }
}

export default authApi;