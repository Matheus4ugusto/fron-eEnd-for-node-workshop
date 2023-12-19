import * as Styled from "./postForm.style";
import React, {useState} from "react";
import {getBase64} from "@/services/getBase64";
import {createPost} from "@/services/post.service";

// TODO atualizar responsividade do botão de publicar
const PostForm: React.FC = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [files, setFiles] = useState<FileList | null>(null);

    const handleSubmit = async () => {
        if (!files) return;
        const fileStrings = [];
        console.log(files)
        for (let i in files) {
            fileStrings.push(await getBase64(files.item(Number(i)) as File))
        }

        try {
            const {data} = await createPost({
                title, content, images: fileStrings,
            })
        } catch (e: any) {
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFiles = event.target.files;
        setFiles(uploadedFiles);
    };

    return (
        <>
            <Styled.Form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="title">Qual o título do seu novo post?</label>
                    <Styled.Input
                        id="title"
                        type="text"
                        onChange={(event) => setTitle(event.target.value)}
                        required={true}
                        maxLength={20}
                    />
                </div>
                <div>
                    <label htmlFor="content">Qual o conteúdo do seu novo post?</label>
                    <Styled.TextArea
                        id="content"
                        maxLength={300}
                        onChange={(event) => setContent(event.target.value)}
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor="archives">
                        Selecione aqui as imagens para o seu novo post.
                    </label>
                    <Styled.Input
                        type="file"
                        accept="image/*"
                        name="data"
                        onChange={handleChange}
                        id="fileInput"
                        multiple={true}
                    />
                </div>
                <button onClick={handleSubmit}>Publicar</button>
            </Styled.Form>
        </>
    );
};
export default PostForm;
