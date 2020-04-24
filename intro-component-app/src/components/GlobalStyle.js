import { createGlobalStyle } from "styled-components";
import mobileBackground from "../images/bg-intro-mobile.png";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #ff7979;
        font-family: 'Poppins', sans-serif;
        background-image: url(${mobileBackground});
      } 
      
      main {
        padding: 3.5rem 1rem 1rem;
      
        .content {
          margin-bottom: 4rem;
        }
      
        .offer {
          margin-bottom: 1.5rem;
        }
      }
`;

export default GlobalStyle;
