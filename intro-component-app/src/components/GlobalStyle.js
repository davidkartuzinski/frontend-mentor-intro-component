import { createGlobalStyle } from "styled-components";
import mobileBackground from "../images/bg-intro-mobile.png";

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
    background-color: #ff7979;
    font-family: 'Poppins', sans-serif;
    background-image: url(${mobileBackground});
    margin: 0;
    height: 100vw;
  } 
  input:focus, textarea:focus, select:focus{
        outline: none;
    }
  
  main {
    margin: 8px;
    padding: 3.5rem 1rem 1rem;
    max-width: 1140px;
  
    .content {
      margin-bottom: 4rem;
    }
  
    .offer {
      margin-bottom: 1.5rem;
    }
    @media screen and (min-width: 1150px) {
      display: grid;
      height: 800px;
      margin: 0 auto;
      padding: 0;
      grid-template-columns: auto 1fr 1fr auto;
      grid-template-rows: 117px 565px auto;
      align-items: center;
      
     div {
        grid-column: 3 / span 1;
        grid-row: 2 / span 1;
      }
      
      
    }
  }
`;

export default GlobalStyle;
