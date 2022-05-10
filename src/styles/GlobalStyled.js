import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    body{
        font-family: 'Poppins', sans-serif;
        color: #f9f4fc;
    }

    h1{
        font-family: 'Macondo', cursive;
        font-weight: 500;
        font-size: 1.2rem;
        color: #332836;
    }

    h2{
        font-size: 2rem;
         font-weight: 500;
    }

    p{
        font-size: 1.3rem;
    }
`;

export default GlobalStyle;
