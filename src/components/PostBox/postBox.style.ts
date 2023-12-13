import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 70%;
  min-height: 20rem;
  background-color: ${({theme}) => theme.colors.black.pure};
  margin: 2rem auto;
  position: relative;
  align-items: center;
  gap: ${({theme}) => theme.typography["md"]};

`

export const UserNameBox = styled.div`
  color: ${({theme}) => theme.colors.white.pure};
  padding: .5rem;
  width: 100%;
  border-bottom: 1px solid white;
`
export const UserName = styled.span`

`

export const TitleBox = styled.div`

`

export const Title = styled.span`
  color: ${({theme}) => theme.colors.white.pure};
`

export const TextBox = styled.div`
  width: 80%;
`

export const Text = styled.p`
  color: ${({theme}) => theme.colors.white.pure};
  text-align: justify;
`

export const ActionsBox = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid ${({theme}) => theme.colors.white.pure};
  gap: ${({theme}) => theme.typography["md"]};
  padding: ${({theme}) => theme.typography["xs"]} 0 0 ${({theme}) => theme.typography["md"]};
`

export const Button = styled.button`
  color: ${({theme}) => theme.colors.white.pure}
`