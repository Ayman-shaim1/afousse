import React, { useState } from "react";
import { Tabs as SCTabs } from "./styles/Tabs.styled";

const Tabs = ({ children }) => {
  const [activeChild, setActiveChild] = useState(null);

  const handleClick = (child) => {
    setActiveChild(child);
  };

  return (
    <SCTabs>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            onClick: () => handleClick(child),
            active: index === 0 && !activeChild ? true : child === activeChild,
          });
        }
        return child;
      })}
    </SCTabs>
  );
};

export default Tabs;
