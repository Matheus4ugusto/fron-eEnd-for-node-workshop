import * as Styled from "./header.style";
import { FaNewspaper, FaRegUserCircle } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";
import React, {useState} from "react";
import {PopUpButton} from "./header.style";

const Header: React.FC = () => {
    const [popUp, setPopUP] = useState(false);
    return(
        <Styled.Header>
            <Styled.Button>
                <FaNewspaper />
                O Blog
            </Styled.Button>
            <Styled.Div>
                <Styled.Button id="sign-in-button">
                    Entrar
                </Styled.Button>
                <Styled.Button id="more-button" onClick={() => setPopUP(!popUp)}>
                    <IoIosMore />
                </Styled.Button>
            </Styled.Div>
            {popUp && <Styled.Section>
                <Styled.PopUpButton id="sing-up-button">
                    <FaRegUserCircle />
                    Cadastre-se
                </Styled.PopUpButton>
                <Styled.PopUpButton>
                    <BiHelpCircle />
                    Precisa de ajuda?
                </Styled.PopUpButton>
            </Styled.Section>}
        </Styled.Header>
    )
}

export default Header;