import React, { useState } from "react";
import { Button, Center, Column, Input, Margin, Row } from "../components";
import { CheckBox } from "../components/styles/CheckBox.styled";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPasswrod] = useState("");
  const [confirmPassword, setConfirmPasswrod] = useState("");

  return (
    <>
      <Margin top={"60"}>
        <Row>
          <Column xs={12} sm={12} md={1} lg={2} xl={3}></Column>
          <Column xs={12} sm={12} md={10} lg={6} xl={6}>
            <form>
              <label>Name</label>
              <Input
                placeholder={"Enter name"}
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
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
              <label>Confrim password</label>
              <Input
                placeholder={"Enter confirm password"}
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPasswrod(e.target.value)}
              />
              <Margin bottom={"20"} top={"20"}>
                <CheckBox label={"show passwords ?"} />
              </Margin>
              <Button block color="black">
                Register
              </Button>
            </form>

            <Margin top={"20"} bottom={"30"}>
              <Center horizontal>
                <p>
                  Already have an account{" "}
                  <Link Link to="/login">
                    Login
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

export default RegisterPage;
