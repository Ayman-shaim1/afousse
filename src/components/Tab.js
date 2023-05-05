import React, { useState } from "react";
import { Tab as SCTab, TabTitle, TabContent } from "./styles/Tabs.styled";
import { v4 as uuidv4 } from "uuid";

const Tab = ({ children, title }) => {
  const id = uuidv4();
  const [activeTab, setActiveTab] = useState(true);

  const activeTabHandler = () => {};

  return (
    <SCTab id={`tab-${id}`}>
      <TabTitle onClick={activeTabHandler} id={`tab-title-${id}`}>
        {title}
      </TabTitle>
      <TabContent active={activeTab} id={`tab-content-${id}`}>
        {children}
      </TabContent>
    </SCTab>
  );
};

export default Tab;
