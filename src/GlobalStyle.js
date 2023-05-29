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

/* .range-slider {
  width: 400px;
  position: relative;
  margin: 15px 0 30px 0;
}

input[type=range] {
  -webkit-appearance: none;
  width: 70%;
  background: transparent; 
  position: absolute;
  left: 0;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: var(--primary-color);
  cursor: pointer;
  margin-top: -5px;
  position: relative;
  z-index: 1;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 90%;
  height: 5px;
  background: #e8e8e8;
  border-radius: 3px;
  border: none;
} */

`;

export default GlobalStyle;
