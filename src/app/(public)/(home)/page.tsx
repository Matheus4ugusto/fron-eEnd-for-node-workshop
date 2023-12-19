"use client"

import PostBox from "@/components/PostBox";
import NewPostButton from "@/components/NewPostButton";
import {useEffect, useState} from "react";
import {getPosts, Post} from "@/services/post.service";

export default function Home() {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        getPosts().then(({data}) => {
            setPosts(data);
        })
    }, []);
    return (
        <>
            {posts.map(post => {
                return <PostBox key={post.id} userName={post.author?.name} postText={post.content}
                                postTitle={post.title}/>
            })}
            <NewPostButton/>
        </>
    )
}