
import { userinstance } from "../axios/axiosinstance";

export const userLogin=(data)=>{
    return userinstance.post("/user/login",data)
}

export const userSignup=(data)=>{
    return userinstance.post("/user/signup",data)
}

export const userProfile=()=>{
    return userinstance.get("/user/profile")
}