import {api} from "@/services/api";

export const getUserName = async () => {
    const {data} = await api.get("?max_length=5&start_with_lorem_ipsum=false")
    return data.text
}

export const getUserEmail = async () => {
    const {data} = await api.get("?max_length=15&start_with_lorem_ipsum=false")
    return data.text
}
