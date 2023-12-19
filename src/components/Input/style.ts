import styled from "styled-components";

export const Input = styled.input`
  border: none;
`;

export const FormControl = styled.div``;

export const Label = styled.label``;

export const MessageError = styled.p`
  font-size: ${({theme}) => theme.typography["xs"]};
  color: ${({theme}) => theme.colors.red.pure};
`;
