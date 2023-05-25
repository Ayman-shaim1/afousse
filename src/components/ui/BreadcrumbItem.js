import React from "react";
import { BreadcrumbItem as StyledBreadcrumbItem } from "../styles/Breadcrumb.styled";

const BreadcrumbItem = ({ children, ...otherProps }) => {
  return (
    <StyledBreadcrumbItem {...otherProps}>{children}</StyledBreadcrumbItem>
  );
};

export default BreadcrumbItem;
