import * as Styled from "./postBox.style"
import React, {useEffect, useState} from "react";
import {FaThumbsDown, FaThumbsUp} from "react-icons/fa";
import {getPostText, getPostTitle} from "@/services/post.service";
import {getUserName} from "@/services/user.service";

export interface PostBoxProps {
    authorName?: string,
    postText?: string,
    postTitle?: string,
}

const PostBox: React.FC<PostBoxProps> = () => {
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
        <Styled.Section>
            <Styled.UserNameBox>
                <Styled.UserName>
                    {userName}
                </Styled.UserName>
            </Styled.UserNameBox>
            <Styled.TitleBox>
                <Styled.Title>
                    {postTitle}
                </Styled.Title>
            </Styled.TitleBox>
            <Styled.TextBox>
                <Styled.Text>
                    {postText}
                </Styled.Text>
            </Styled.TextBox>
            <Styled.ActionsBox>
                <Styled.Button name="Gostei" aria-label="Gostei">
                    <FaThumbsUp/>
                </Styled.Button>
                <Styled.Button name="Não gostei" aria-label="Não gostei">
                    <FaThumbsDown/>
                </Styled.Button>
            </Styled.ActionsBox>
        </Styled.Section>
    )
}

export default PostBox;
