import axios  from "axios";
import { API_URL } from "./config";


export const post = (path: string, data:any) => {
    const url = `${API_URL}${path}`
    return axios.post(url, data)
}

export const get = (path: string) => {
    const url = `${API_URL}${path}`
    return axios.get(url)
}