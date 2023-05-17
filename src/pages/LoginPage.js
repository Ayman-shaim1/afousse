import React, { useState } from "react";
import {
  Button,
  Center,
  Column,
  Divider,
  Input,
  Margin,
  Row,
} from "../components";

import { Link } from "react-router-dom";
import { CheckBox } from "../components/styles/CheckBox.styled";
import GoogleLogo from "../assets/images/google-logo.png";
import FacebookLogo from "../assets/images/facebook-logo.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");
  return (
    <>
      <Margin top={"60"}>
        <Row>
          <Column xs={12} sm={12} md={1} lg={2} xl={3}></Column>
          <Column xs={12} sm={12} md={10} lg={6} xl={6}>
            <form>
              <label>Email</label>
              <Input
                placeholder={"Enter email"}
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Password</label>
              <Input
                placeholder={"Enter password"}
                type="password"
                value={password}
                onChange={(e) => setPasswrod(e.target.value)}
              />

              <Margin bottom={"20"} top={"20"}>
                <CheckBox label={"show password ?"} />
              </Margin>

              <Button block color="black" style={{ marginBottom: "22px" }}>
                Login
              </Button>
            </form>
            <Margin top={"20"} bottom={"30"}>
              <Center horizontal>
                <Link to="/forgot-password">Forgot password ?</Link>
              </Center>
            </Margin>

            <Divider withOr />
            <Button color="white" block style={{ margin: "12px 0" }}>
              <img src={GoogleLogo} className="ic-img" alt="ic-img" /> Login
              with gmail
            </Button>
            <Button color="white" block>
              <img src={FacebookLogo} className="ic-img" alt="ic-img" /> Login
              with facebook
            </Button>

            <Margin top={"20"} bottom={"30"}>
              <Center horizontal>
                <p>
                  New customer{" "}
                  <Link Link to="/register">
                    Register
                  </Link>
                  ?
                </p>
              </Center>
            </Margin>
          </Column>
          <Column xs={12} sm={12} md={1} lg={2} xl={3}></Column>
        </Row>
      </Margin>
    </>
  );
};

export default LoginPage;