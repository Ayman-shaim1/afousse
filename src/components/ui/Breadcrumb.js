import React from "react";
import { Breadcrumb as StyledBreadcrumb } from "../styles//Breadcrumb.styled";

const Breadcrumb = ({ children }) => {
  return <StyledBreadcrumb>{children}</StyledBreadcrumb>;
};

export default Breadcrumb;
