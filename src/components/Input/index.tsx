import { HTMLProps, forwardRef } from "react";
import * as Styled from "./style";

interface InputBaseProps extends HTMLProps<HTMLInputElement> {
  label: string;
  errors?: any;
}

const InputBase = ({ label, errors, ...props }: InputBaseProps, ref: any) => {
  return (
    <Styled.FormControl>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Input {...props} ref={ref} />
      {!!errors && <Styled.MessageError>{errors.message}</Styled.MessageError>}
    </Styled.FormControl>
  );
};

export const Input = forwardRef<any, InputBaseProps>(InputBase);
