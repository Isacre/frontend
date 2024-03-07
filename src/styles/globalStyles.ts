import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`


* {
margin: 0;
padding: 0;
}

:root {
}

.App {
height: 100vh;
width: 100vw; 
box-sizing: border-box;
font-family: Lato;
background-color: RGB(26 27 49);

a{ 
    text-decoration: none;
    color: inherit;
}
}
`;


export default GlobalStyle;