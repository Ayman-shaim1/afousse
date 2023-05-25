import React, { useState } from "react";
import {
  Button,
  Center,
  Column,
  Divider,
  Input,
  Margin,
  Row,
  Label,
  Breadcrumb,
  BreadcrumbItem,
} from "../components/ui";

import { Link } from "react-router-dom";
import { CheckBox } from "../components/styles/CheckBox.styled";
import GoogleLogo from "../assets/images/google-logo.png";
import FacebookLogo from "../assets/images/facebook-logo.png";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");
  const { t } = useTranslation();

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem to="/home">Home</BreadcrumbItem>
        <BreadcrumbItem>Login</BreadcrumbItem>
      </Breadcrumb>
      <Margin top={"60"}>
        <Row>
          <Column xs={12} sm={12} md={1} lg={2} xl={3}></Column>
          <Column xs={12} sm={12} md={10} lg={6} xl={6}>
            <form>
              <Label>{t("login.email")}</Label>
              <Input
                placeholder={t("login.placeholderEmail")}
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label>{t("login.password")}</Label>
              <Input
                placeholder={t("login.placeholderPassword")}
                type="password"
                value={password}
                onChange={(e) => setPasswrod(e.target.value)}
              />

              <Margin bottom={"20"} top={"20"}>
                <CheckBox label={t("login.showPassword")} />
              </Margin>

              <Button block color="black" style={{ marginBottom: "22px" }}>
                {t("login.signIn")}
              </Button>
            </form>
            <Margin top={"20"} bottom={"30"}>
              <Center horizontal>
                <Link to="/forgot-password">{t("login.forgotPassword")}</Link>
              </Center>
            </Margin>

            <Divider withOr />
            <Button color="white" block style={{ margin: "12px 0" }}>
              <img src={GoogleLogo} className="ic-img" alt="ic-img" />{" "}
              {t("login.signInWithGoogle")}
            </Button>
            <Button color="white" block>
              <img src={FacebookLogo} className="ic-img" alt="ic-img" />{" "}
              {t("login.signInWithFacebook")}
            </Button>

            <Margin top={"20"} bottom={"30"}>
              <Center horizontal>
                <p>
                  {t("login.newCustomer")}{" "}
                  <Link Link to="/register">
                    {t("login.signUp")}{" "}
                  </Link>
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
