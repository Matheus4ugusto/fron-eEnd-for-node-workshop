import React, { useState, useEffect } from "react";
import * as Styled from "./header.style";
import { FaNewspaper, FaRegUserCircle } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";

const Header: React.FC = () => {

    const [popUp, setPopUP] = useState(false);
    return (
        <Styled.Header>
            <Styled.Button name="O Blog" aria-label="O Blog">
                <FaNewspaper />
                O Blog
            </Styled.Button>
            <Styled.Div>
                <Styled.Button id="sign-in-button" name="Entrar" aria-label="Entrar">
                    Entrar
                </Styled.Button>
                <Styled.Button
                    id="more-button"
                    onClick={() => setPopUP(!popUp)}
                    name="More button"
                    aria-label="More Button"
                >
                    <IoIosMore />
                </Styled.Button>
            </Styled.Div>
            {popUp && (
                <Styled.Section>
                    <Styled.PopUpButton id="sign-up-button" name="Cadastre-se" aria-label="Cadastre-se">
                        <FaRegUserCircle />
                        Cadastre-se
                    </Styled.PopUpButton>
                    <Styled.PopUpButton name="Precisa de ajuda?" aria-label="Precisa de ajuda?">
                        <BiHelpCircle />
                        Precisa de ajuda?
                    </Styled.PopUpButton>
                </Styled.Section>
            )}
        </Styled.Header>
    );
};

export default Header;
