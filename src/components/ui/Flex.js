import React from "react";

const Flex = ({ children, justifyContent, alignItems }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: justifyContent,
        alignItems: alignItems,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
