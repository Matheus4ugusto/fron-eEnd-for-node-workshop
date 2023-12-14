import * as Styled from "./newPostButton.style";
import {IoPencil} from "react-icons/io5";
import React from "react";
import {useRouter} from "next/navigation";

const NewPostButton: React.FC = () => {

    const router = useRouter();
    const navigateTo = (path: string) => (e: any) => {
        e.preventDefault();
        router.push(path);
    };

    const handleNewPost = navigateTo("/postPage");
    return (
        <Styled.Button onClick={handleNewPost}>
            <IoPencil/>
            <span> Novo Post</span>
        </Styled.Button>
    )
}

export default NewPostButton