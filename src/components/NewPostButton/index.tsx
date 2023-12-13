import * as Styled from "./newPostButton.style";
import {IoPencil} from "react-icons/io5";
import React from "react";

const NewPostButton: React.FC = () => {
    return (
        <Styled.Button>
            <IoPencil/>
            <span> Novo Post</span>
        </Styled.Button>
    )
}

export default NewPostButton