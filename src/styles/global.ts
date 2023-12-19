import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;
    background-color: ${({theme}) => theme.colors.blue.deep};
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`;

export default GlobalStyles;
