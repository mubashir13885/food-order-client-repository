import axios from "axios";

export const userinstance = axios.create({
    baseURL:"http://localhost:4000"
})

userinstance.interceptors.request.use((request)=>{
        const token = localStorage.getItem("token")
        request.headers.Authorization = `Bearer ${token}`
        return request;
    })