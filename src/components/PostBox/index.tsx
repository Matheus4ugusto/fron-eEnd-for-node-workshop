import * as Styled from "./postBox.style"
import React from "react";
import {FaThumbsDown, FaThumbsUp} from "react-icons/fa";

//TODO tornar o nome de usuário um botão que redireciona ao perfil do usuário

export interface PostBoxProps {
    authorName: string,
    postText: string
}

const PostBox: React.FC = () => {
    return (
        <Styled.Section>
            <Styled.UserNameBox>
                <Styled.UserName>
                    Nome de usuário
                </Styled.UserName>
            </Styled.UserNameBox>
            <Styled.TitleBox>
                <Styled.Title>
                    Título
                </Styled.Title>
            </Styled.TitleBox>
            <Styled.TextBox>
                <Styled.Text>
                    Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Consequat id porta nibh venenatis cras sed
                    felis eget velit. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Et tortor consequat id
                    porta nibh. Ut etiam sit amet nisl purus. Leo vel fringilla est ullamcorper. Donec adipiscing
                    tristique risus nec feugiat in fermentum posuere. Vel facilisis volutpat est velit egestas dui id.
                    Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Fusce ut placerat orci
                    nulla pellentesque dignissim enim sit amet. Nibh tellus molestie nunc non blandit. Nisi lacus sed
                    viverra tellus in hac habitasse platea dictumst.Id eu nisl nunc mi ipsum faucibus vitae aliquet nec.
                    Consequat id porta nibh venenatis cras sed felis eget velit. Bibendum at varius vel pharetra vel
                    turpis nunc eget lorem. Et tortor consequat id porta nibh. Ut etiam sit amet nisl purus. Leo vel
                    fringilla est ullamcorper. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Vel
                    facilisis volutpat est velit egestas dui id. Quis imperdiet massa tincidunt nunc pulvinar sapien et
                    ligula ullamcorper. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Nibh tellus
                    molestie nunc non blandit. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Id eu
                    nisl nunc mi ipsum faucibus vitae aliquet nec. Consequat id porta nibh venenatis cras sed
                    felis eget velit. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Et tortor consequat id
                    porta nibh. Ut etiam sit amet nisl purus. Leo vel fringilla est ullamcorper. Donec adipiscing
                    tristique risus nec feugiat in fermentum posuere. Vel facilisis volutpat est velit egestas dui id.
                    Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Fusce ut placerat orci
                    nulla pellentesque dignissim enim sit amet. Nibh tellus molestie nunc non blandit. Nisi lacus sed
                    viverra tellus in hac habitasse platea dictumst.Id eu nisl nunc mi ipsum faucibus vitae aliquet nec.
                    Consequat id porta nibh venenatis cras sed felis eget velit. Bibendum at varius vel pharetra vel
                    turpis nunc eget lorem. Et tortor consequat id porta nibh. Ut etiam sit amet nisl purus. Leo vel
                    fringilla est ullamcorper. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Vel
                    facilisis volutpat est velit egestas dui id. Quis imperdiet massa tincidunt nunc pulvinar sapien et
                    ligula ullamcorper. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Nibh tellus
                    molestie nunc non blandit. Nisi lacus sed viverra tellus in hac habitasse platea dictumst.
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
