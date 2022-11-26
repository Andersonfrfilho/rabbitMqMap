import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export const GlobalStyles = createGlobalStyle<typeof theme>`
  * {
    box-sizing: border-box;
  }
  html,body,#__next {
    margin: 0px;
    padding: 0px;
    height: 100vh;
  }

  body {
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.primary};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
  }

  a {
    color: ${({ theme }) => theme.color.secundary};
    cursor: pointer;
  }

  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
    font-family: ${({ theme }) => theme.font};
  }

  button.btn {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.secundary};
  }

  h1{
     margin: 0;
  }
`;
