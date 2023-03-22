import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body{
      min-height: 100vh;
      overflow: hidden;
      font-family: 'Ubuntu', sans-serif;
    }
`