import React from "react";
import { Column as STCColumn } from "./styles/Column.styled";

const Column = ({ children, xs, md, lg, xl }) => {
  return (
    <STCColumn xs={xs} md={md} lg={lg} xl={xl}>
      {children}
    </STCColumn>
  );
};

export default Column;
