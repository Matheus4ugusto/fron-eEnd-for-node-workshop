import React, {useEffect, useState} from "react";
import * as Styled from "./header.style";
import {FaNewspaper, FaRegUserCircle} from "react-icons/fa";
import {IoIosMore} from "react-icons/io";
import {BiHelpCircle} from "react-icons/bi";
import {useRouter} from "next/navigation";

const Header: React.FC = () => {

    const router = useRouter();

    const navigateTo = (path: string) => (e: any) => {
        e.preventDefault();
        router.push(path);
    };

    const handleSignUp = navigateTo("/register");
    const handleSignIn = navigateTo("/login");
    const handleHelp = navigateTo("/help");
    const handleHome = navigateTo("/");

    const [popUp, setPopUp] = useState(false);

    const handleMoreButtonClick = () => setPopUp(!popUp);

    return (
        <Styled.Header>
            <Styled.Button name="O Blog" aria-label="O Blog" onClick={handleHome}>
                <FaNewspaper/>
                O Blog
            </Styled.Button>
            <Styled.Div>
                <Styled.Button
                    id="sign-in-button"
                    name="Entrar"
                    aria-label="Entrar"
                    onClick={handleSignIn}
                >
                    Entrar
                </Styled.Button>
                <Styled.Button
                    id="more-button"
                    onClick={handleMoreButtonClick}
                    name="More button"
                    aria-label="More Button"
                >
                    <IoIosMore/>
                </Styled.Button>
            </Styled.Div>
            {popUp && (
                <Styled.Section>
                    <Styled.PopUpButton
                        id="sign-up-button"
                        name="Cadastre-se"
                        aria-label="Cadastre-se"
                        onClick={handleSignUp}
                    >
                        <FaRegUserCircle/>
                        Cadastre-se
                    </Styled.PopUpButton>
                    <Styled.PopUpButton
                        name="Precisa de ajuda?"
                        aria-label="Precisa de ajuda?"
                        onClick={handleHelp}
                    >
                        <BiHelpCircle/>
                        Precisa de ajuda?
                    </Styled.PopUpButton>
                </Styled.Section>
            )}
        </Styled.Header>
    );
};

export default Header;
