import * as Styled from "./postForm.style";
import React, {useState} from "react";
import {json} from "stream/consumers";

const PostForm: React.FC = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")
    const object = {
        title,
        content,
    }
    const handleSubmit = () => {
        object.title = title;
        object.content = content;
        const response = JSON.stringify(object);
        console.log(response)
        localStorage.setItem("post", response);
    }
    return (
        <>
            <Styled.Form>
                <div>
                    <label htmlFor="title">Qual o título do seu novo post?</label>
                    <Styled.Input id="title" type="text"
                                  onChange={(event) => setTitle(event.target.value)}
                                  required={true}
                                  maxLength={20}/>
                </div>
                <div>
                    <label htmlFor="content">Qual o conteúdo do seu novo post?</label>
                    <Styled.TextArea id="content" maxLength={300}
                                     onChange={(event) => setContent(event.target.value)}
                                     required={true}/>
                </div>
                <button onClick={handleSubmit}>Publicar</button>
            </Styled.Form>

        </>

    )
};
export default PostForm;