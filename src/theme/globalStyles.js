import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    --color-text: black;
    --color-background: lightgray;
    --color-backdrop: rgba(0, 0, 0, 0.5);
    --color-gray-900: red;
    --color-white: #FFFFFF;
    --box-shadow-card: -2px 0px 10px 2px rgba(0, 0, 0, 0.61);
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
