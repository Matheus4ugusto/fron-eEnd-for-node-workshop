import {api} from "@/services/api";
import {AxiosResponse} from "axios";
import {User} from "@/services/user.service";

export interface Post {
    id: string;
    title: string;
    content: string;
    author?: User;
    createAt: Date;
    updatedAt: Date;
}

export interface CreatePost extends Omit<Post, "id" | "createAt" | "updatedAt" | "author"> {
    images: string[];
}

export const getPosts = (): Promise<AxiosResponse<Post[]>> => {
    return api.get("/posts");
}

export const createPost = (data: CreatePost): Promise<AxiosResponse<Post>> => {
    return api.post("/posts", data)
}