import React from "react";
import { Tabs, Tab } from "../components";
const HomePage = () => {
  return (
    <>
      <Tabs>
        <Tab title="Tab1">
          <h3>Hello world tab1</h3>
        </Tab>
        <Tab title="Tab2">
          <h3>Hello world tab2</h3>
        </Tab>
        <Tab title="Tab3">
          <h3>Hello world tab3</h3>
        </Tab>
      </Tabs>
    </>
  );
};

export default HomePage;
