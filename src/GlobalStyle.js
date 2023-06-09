import { createGlobalStyle } from "styled-components";
import AmiraBeauty from "./assets/fonts/AmiraBeauty.otf";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Amira Beauty';
    src: url(${AmiraBeauty}) format('truetype');
}

*{
  box-sizing:border-box;
}

body {
  font-family: 'Nunito Sans', sans-serif;
  letter-spacing: 0;
}

a{
  color:var(--black-color);
}

.title {
  font-family:'Amira Beauty';
  margin: 0 auto 80px;
  padding: 5px;
  font-size: 40px;
  width: fit-content;
  position: relative;
  display:flex;

  &::before,
  &::after {
    content: "";
    width: 12px;
    height: 12px;
    background-color: var(--secondary-color);
    position: absolute;
    border-radius: 50%;
    top: 50%;
  }
 
  &::before {
    left: -30px;
  }
  &::after {
     right: -30px;
  } 
}

h1,
h2,
h3,
h4,
h5,
h6 {
  text-transform: uppercase;
  font-weight: 400;
  margin:7px 0;
}

.ic-img{
  width:18px;
  height:18px;
  margin:2px;
}

.cat-link{
  text-decoration:none;
  :hover{
    color:var(--gray-color);
    text-decoration:underline;
  }
}

`;

export default GlobalStyle;
