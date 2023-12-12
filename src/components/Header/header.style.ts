import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.black.pure};
  height: ${({theme}) => theme.typography["7xl"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  #more-button{
    margin-left: 0;
    padding-left: ${({theme}) => theme.typography["xs"]};
  }
  
  #sign-in-button{
    margin-right: 0;
    border-right: 1px solid ${({theme}) => theme.colors.white.pure};
    padding-right: ${({theme}) => theme.typography["xs"]};
  }
  position: relative;
  @media(max-width: 320px){
    button{
      font-size: ${({theme}) => theme.typography["xl"]};
    }
    #more-button{
      margin-right: 0;
      padding-right: ${({theme}) => theme.typography["xs"]};
    }
  }
`;

export const Button = styled.button`
  color: ${({theme}) => theme.colors.white.pure};
  height: 80%;
  margin: ${({theme}) => theme.typography["4xl"]};
  font-size: ${({theme}) => theme.typography["2xl"]};
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.typography["xs"]};
`

export const Div = styled.div`
display: flex;
`

export const PopUpButton = styled.button`
  display: flex;
  gap: .5rem;
  color: ${({theme}) => theme.colors.blue.deep};
  font-size: 2rem;
  align-items: center;
  padding: .5rem;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  position: absolute;
  bottom: -7rem;
  right: ${({theme}) => theme.typography["4xl"]};
  box-shadow: 0 10px 100px 25px #28283d;
  border-radius: 4px;
  #sign-up-button{
    border-bottom: .2px solid ${({theme}) => theme.colors.blue.deep};
  }
  @media(max-width: 320px){
    bottom: -5.3rem;
    right: ${({theme}) => theme.typography["xs"]};
  }
`