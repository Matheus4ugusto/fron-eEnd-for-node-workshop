import axios from "axios";

export const api = axios.create({
    baseURL: "/api",
    withCredentials: true,
    headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY
    }
})