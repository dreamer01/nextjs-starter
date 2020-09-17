import { createGlobalStyle } from "styled-components";

// import arrow from "../assets/images/arrow.svg";

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
    margin: 0px;
    font-family: Poppins;
    color: ${(p) => p.theme.textNormal};
    background-color: ${(p) => p.theme.bgColor};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 10px 0;
    line-height: 140%;
  }

  p,label,div {
    font-size: 16px;
    margin: 0;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-family: Poppins;
    transition: all 0.2s ease-in-out;
    color: ${(p) => p.theme.light};
    &:hover{
      color: ${(p) => p.theme.primary};
    }
  }

  input, button , textarea {
    font-size: 16px;
    line-height: 1.5;
    font-family: Poppins;
    color: ${(p) => p.theme.textNormal};
  }
  

  li {
    list-style: none;
  }

  li::before {  
    list-style: none;
    content: "";
    background-image: url("./icons/arrow.svg");
    background-size: contain;
    display: inline-block;
    width: 1em;
    height: 1em;
    position: relative;
    top: 0.1rem;
    margin-right: 8px;
  }

  hr{
    border-top: 0.5px solid ${(p) => p.theme.light}
  }

`;

export default GlobalStyle;
