import * as Styled from "./postBox.style"
import React from "react";
import {FaThumbsDown, FaThumbsUp} from "react-icons/fa";

//TODO tornar o nome de usuário um botão que redireciona ao perfil do usuário

export interface PostBoxProps {
    authorName?: string,
    postText?: string,
    postTitle?: string,
}

const PostBox: React.FC<PostBoxProps> = ({authorName, postText, postTitle}) => {
    return (
        <Styled.Section>
            <Styled.UserNameBox>
                <Styled.UserName>
                    {authorName}
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
