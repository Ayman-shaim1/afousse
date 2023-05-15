import React from "react";
import { Column, Margin, Row, Tab, Tabs } from "../components";
import Login from "../components/Login";
import Register from "../components/Register";

const LoginPage = () => {
  return (
    <>
      <Margin top={"60"}>
        <Row>
          <Column xs={12} sm={12} md={1} lg={2} xl={3}></Column>
          <Column xs={12} sm={12} md={10} lg={6} xl={6}>
            <Tabs>
              <Tab title={"Login"}>
                <Login />
              </Tab>
              <Tab title={"Register"}>
                <Register />
              </Tab>
            </Tabs>
          </Column>
          <Column xs={12} sm={12} md={1} lg={2} xl={3}></Column>
        </Row>
      </Margin>
    </>
  );
};

export default LoginPage;
