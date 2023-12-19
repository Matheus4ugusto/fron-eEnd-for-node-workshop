import {HTMLProps} from "react";
import * as Styled from "./styles";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    children: string;
    type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({children, ...props}: ButtonProps) => {
    return <Styled.Button {...props}>{children}</Styled.Button>;
};
