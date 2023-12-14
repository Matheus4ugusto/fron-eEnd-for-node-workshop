import * as Styled from "./postForm.style";
import React from "react";

const PostForm: React.FC = () => {
    return (
        <Styled.Form>
            <div>
                <label htmlFor="title">Qual o título do seu novo post?</label>
                <Styled.Input id="title" type="text"/>
            </div>
            <div>
                <label htmlFor="content">Qual o conteúdo do seu novo post?</label>
                <Styled.TextArea id="content" maxLength={297}/>
            </div>
        </Styled.Form>
    )
};
export default PostForm;