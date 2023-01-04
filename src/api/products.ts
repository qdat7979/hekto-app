import axiosClient from "./axiosClient";

const productApi = {
    getProduct() {
        const url = '/products'
        return axiosClient.get(url);
    },

    addtoCart(data: any){
        const url = `/users/${data.id}`
        return axiosClient.put(url, data)  
    },
    
    removeCart(data: any) {
        const url = `/users/${data.id}`
        return axiosClient.put(url, data)  
    },
    getProductDetail(id: any) {
        const url = `/products/${id}`;
        return axiosClient.get(url)
    }
}

export default productApi