import {api} from "@/services/api";
import {AxiosResponse} from "axios";

interface LoginResponse {
    type: string;
    token: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    gender: string;
    birthDate: string;
    password: string;
}

export interface CreateUser extends Omit<User, "id"> {
    confirmPassword?: string;
}

export const login = (email: string, password: string)
    : Promise<AxiosResponse<LoginResponse>> => {
    return api.post("/login", {
        email,
        password,
    })
}

export const createUser = (data: CreateUser): Promise<AxiosResponse<User>> => {
    return api.post("/users", data)
}