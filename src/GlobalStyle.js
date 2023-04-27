import { createGlobalStyle } from "styled-components";
import AmiraBeauty from "./assets/fonts/AmiraBeauty.otf";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap");
@font-face {
    font-family: 'Amira Beauty';
    src: url(${AmiraBeauty}) format('truetype');
}

body {
  font-family: "Nunito Sans", sans-serif;
  letter-spacing: 1px;
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
    transform: translateY(-50%);
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
  
}
`;

export default GlobalStyle;
