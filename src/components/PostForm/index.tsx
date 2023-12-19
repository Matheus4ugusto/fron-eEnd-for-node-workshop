import * as Styled from "./postForm.style";
import React, {useState} from "react";

// TODO atualizar responsividade do botão de publicar
const PostForm: React.FC = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [files, setFiles] = useState<FileList | null>(null);

    const handleSubmit = () => {
        if (!files) return;

        const fileArray = Array.from(files);
        const promises = fileArray.map((file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const base64String = e.target?.result as string;
                    resolve({name: file.name, data: base64String});
                };
                reader.onerror = (error) => reject(error);
                reader.readAsDataURL(file);
            });
        });

        Promise.all(promises)
            .then((base64Files) => {
                const object = {
                    title,
                    content,
                    files: base64Files,
                };
                const response = JSON.stringify(object);
                console.log(response);
                localStorage.setItem("post", response);
            })
            .catch((error) => console.error("Error reading files:", error));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFiles = event.target.files;
        setFiles(uploadedFiles);
    };

    return (
        <>
            <Styled.Form>
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
                    />
                </div>
                <button onClick={handleSubmit}>Publicar</button>
            </Styled.Form>
        </>
    );
};
export default PostForm;
