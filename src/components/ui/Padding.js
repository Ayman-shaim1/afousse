import React from "react";

const Padding = ({ top, left, bottom, right, children }) => {
  return (
    <div
      style={{
        paddingTop: top + "px",
        paddingLeft: left + "px",
        paddingRight: right + "px",
        paddingBottom: bottom + "px",
      }}
    >
      {children}
    </div>
  );
};

export default Padding;
