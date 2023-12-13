"use client"

import PostBox from "@/components/PostBox";
import {getPostText, getPostTitle} from "@/services/post.service";
import {getUserName} from "@/services/user.service";
import {useEffect, useState} from "react";

export default function Home() {
    const [postText, setPostText] = useState()
    const [postTitle, setPostTitle] = useState()
    const [userName, setUserName] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const postTextResponse = await getPostText();
                const postTitleResponse = await getPostTitle();
                const userNameResponse = await getUserName();

                setPostText(postTextResponse);
                setPostTitle(postTitleResponse);
                setUserName(userNameResponse);
            } catch (error) {
                console.error("Um erro inesperado ocorreu", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <PostBox postText={postText} postTitle={postTitle} authorName={userName}/>
            <PostBox postText={postText} postTitle={postTitle} authorName={userName}/>
            <PostBox postText={postText} postTitle={postTitle} authorName={userName}/>
        </>

    )
}