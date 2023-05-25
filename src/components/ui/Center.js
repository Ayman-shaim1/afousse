import React from "react";

const Center = ({ vertical, horizontal, children }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: horizontal && "center",
        alignItems: vertical && "center",
      }}
    >
      {children}
    </div>
  );
};

export default Center;
