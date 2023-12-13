import {api} from "@/services/api";

export const getPostText = async () => {
    const {data} = await api.get("?start_with_lorem_ipsum=false&random=true")
    return data.text
}

export const getPostTitle = async () => {
    const {data} = await api.get("?start_with_lorem_ipsum=false&max_length=10")
    return data.text
}