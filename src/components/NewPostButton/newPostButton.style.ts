import styled from "styled-components";

export const Button = styled.button`
  color: ${({theme}) => theme.colors.white.pure};
  background-color: ${({theme}) => theme.colors.black.pure};
  text-align: center;
  border-radius: 40px;
  font-size: 2rem;
  width: 14rem;
  height: 4rem;
  position: fixed;
  bottom: 3rem;
  right: 1.5rem;
  transition: all .5s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1440px) {
    span {
      display: none;
    }

    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }

  @media (max-width: 425px) {
    right: .2rem;
  }
`;