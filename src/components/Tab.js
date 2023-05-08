import React from "react";
import { Tab as SCTab, TabTitle, TabContent } from "./styles/Tabs.styled";

const Tab = ({ children, title, active, onClick }) => {
  return (
    <SCTab>
      <TabTitle onClick={onClick} active={active}>{title}</TabTitle>
      <TabContent active={active}>{children}</TabContent>
    </SCTab>
  );
};

export default Tab;
