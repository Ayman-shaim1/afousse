import React from "react";
import { Button as SCButton } from "./styles/Button.styled";
const Button = ({ children, block, ...props }) => {
  return <SCButton block={block} {...props}>{children}</SCButton>;
};

export default Button;
