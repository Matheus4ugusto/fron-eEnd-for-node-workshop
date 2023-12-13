import React, {useState} from "react";
import * as Styled from "./header.style";
import {FaNewspaper, FaRegUserCircle} from "react-icons/fa";
import {IoIosMore} from "react-icons/io";
import {BiHelpCircle} from "react-icons/bi";
import {redirect, useRouter} from "next/navigation";

const Header: React.FC = () => {

    const router = useRouter();
    const handleSignUp = (e: any) => {
        e.preventDefault()
        router.push("/register")
    }
    const handleSignIn = (e: any) => {
        e.preventDefault()
        router.push("/login")
    }
    const handleHelp = (e: any) => {
        e.preventDefault()
        router.push("/help")
    }
    const handleHome = (e: any) => {
        e.preventDefault()
        router.push("/")
    }

    const [popUp, setPopUP] = useState(false);
    return (
        <Styled.Header>
            <Styled.Button name="O Blog" aria-label="O Blog" onClick={handleHome}>
                <FaNewspaper/>
                O Blog
            </Styled.Button>
            <Styled.Div>
                <Styled.Button id="sign-in-button" name="Entrar" aria-label="Entrar" onClick={handleSignIn}>
                    Entrar
                </Styled.Button>
                <Styled.Button
                    id="more-button"
                    onClick={() => setPopUP(!popUp)}
                    name="More button"
                    aria-label="More Button"
                >
                    <IoIosMore/>
                </Styled.Button>
            </Styled.Div>
            {popUp && (
                <Styled.Section>
                    <Styled.PopUpButton id="sign-up-button" name="Cadastre-se" aria-label="Cadastre-se"
                                        onClick={handleSignUp}>
                        <FaRegUserCircle/>
                        Cadastre-se
                    </Styled.PopUpButton>
                    <Styled.PopUpButton name="Precisa de ajuda?" aria-label="Precisa de ajuda?" onClick={handleHelp}>
                        <BiHelpCircle/>
                        Precisa de ajuda?
                    </Styled.PopUpButton>
                </Styled.Section>
            )}
        </Styled.Header>
    );
};

export default Header;
