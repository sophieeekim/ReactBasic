import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


const globalStyles = createGlobalStyle`
    ${reset};
    a {
        text-decoration: none;
        color:  inherit;
    }
    * { 
        box-sizing: border-box;
    }  
    body {
        font-size: 1em;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: rgba(0,0,0,0.8);
    } 
`;

export default globalStyles;