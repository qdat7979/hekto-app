import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'https://639ace6cd5141501973fc688.mockapi.io/api/'
});

export default axiosClient;