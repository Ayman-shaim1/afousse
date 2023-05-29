import React from "react";
import { ButtonLink as SCButtonLink } from "../styles/Button.styled";

const ButtonLink = ({ children, ...otherProps }) => {
  return <SCButtonLink {...otherProps}>{children}</SCButtonLink>;
};

export default ButtonLink;
