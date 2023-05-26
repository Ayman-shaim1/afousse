import React from "react";

const Margin = ({ top, left, bottom, right, children }) => {
  return (
    <div
      style={{
        marginTop: top + "px",
        marginLeft: left + "px",
        marginRight: right + "px",
        marginBottom: bottom + "px",
        display:'block'
      }}
    >
      {children}
    </div>
  );
};

export default Margin;
