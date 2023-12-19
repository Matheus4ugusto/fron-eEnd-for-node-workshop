import * as Styled from "./postBox.style"
import React, {useEffect, useState} from "react";
import {FaThumbsDown, FaThumbsUp} from "react-icons/fa";

export interface PostBoxProps {
    userName?: string,
    postText?: string,
    postTitle?: string,
}

const PostBox: React.FC<PostBoxProps> = ({userName, postTitle, postText}) => {

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
