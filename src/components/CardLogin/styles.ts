import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({theme}) => theme.colors.black.pure};
  padding: 1rem;
  border-radius: 6px;
  width: 22rem;
  margin: auto;
`;

export const CardHeader = styled.div`
  border-bottom: 1px solid ${({theme}) => theme.colors.gray.pure};
  width: 100%;
`;

export const CardTitle = styled.h2`
  padding-bottom: ${({theme}) => theme.typography["xs"]};
`;

export const CardBody = styled.div`
  padding-top: ${({theme}) => theme.typography["xs"]};

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;


    input {
      display: flex;
      background-color: ${({theme}) => theme.colors.blue.deep};
      border-radius: 10px;
      width: 100%;
      height: 1.5rem;
      margin-top: .5rem;
      padding-left: .5rem;

      &:focus {
        outline: none;
        background-color: ${({theme}) => theme.colors.blue.midnight};
        transform: scale(1.01);
      }

      transition: all .5s;
    }

    button {
      background-color: ${({theme}) => theme.colors.blue.deep};
      padding: .5rem;
      border-radius: 10px;
      width: 30%;
      margin: 0 auto;

      &:hover {
        background-color: ${({theme}) => theme.colors.blue.midnight};
        transform: scale(1.01);
      }

      transition: all .5s;
    }
  }
`;