import React from "react";
import { Center, Column, Row, Tab, Tabs } from "../components";
import Login from "../components/Login";
import Register from "../components/Register";

const LoginPage = () => {
  return (
    <>
      <Center horizontal>
        <Row>
          <Column xs={12} sm={12} md={6} lg={6} xl={6}>
            <Login />
          </Column>
        </Row>
      </Center>
    </>
  );
};

export default LoginPage;
