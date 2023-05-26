import React from "react";

const Flex = ({ children, justifyContent, alignItems, flexDirection }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: justifyContent,
        alignItems: alignItems,
        flexDirection: flexDirection,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
