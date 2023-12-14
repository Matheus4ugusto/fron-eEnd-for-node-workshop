import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  background-color: ${({theme}) => theme.colors.black.pure};
  width: 80%;
  height: 80%;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  padding: 2rem;
  gap: .5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 80%;
    border-bottom: 1px solid ${({theme}) => theme.colors.gray.pure};
  }

  label {
    color: ${({theme}) => theme.colors.white.pure};
  }

  #title {
    width: 25%;
    height: 2rem;
    border-radius: 10px;
  }
`;

export const Input = styled.input`
  background-color: ${({theme}) => theme.colors.blue.deep};
  border: none;
  font-size: 2rem;
  color: ${({theme}) => theme.colors.white.pure};
  padding-left: .7rem;
  margin-bottom: .5rem;

  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  background-color: ${({theme}) => theme.colors.blue.deep};
  color: ${({theme}) => theme.colors.white.pure};
  resize: none;
  border: none;
  border-radius: 10px;
  margin-bottom: .5rem;
  font-size: 1.3rem;
  padding: .5rem;
  height: 6rem;

  &:focus {
    outline: none;
  }
`;