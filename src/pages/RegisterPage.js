import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Center,
  Column,
  Input,
  Label,
  Margin,
  Row,
} from "../components/ui";
import { CheckBox } from "../components/styles/CheckBox.styled";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPasswrod] = useState("");
  const [confirmPassword, setConfirmPasswrod] = useState("");
  const { t } = useTranslation();
  return (
    <>
      <Margin top={"60"}>
        <Breadcrumb>
          <BreadcrumbItem to="/home">Home</BreadcrumbItem>
          <BreadcrumbItem>Register</BreadcrumbItem>
        </Breadcrumb>
        <Row>
          <Column xs={12} sm={12} md={1} lg={2} xl={3}></Column>
          <Column xs={12} sm={12} md={10} lg={6} xl={6}>
            <form>
              <Label>{t("register.name")}</Label>
              <Input
                placeholder={t("register.placeholderName")}
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <Label>{t("register.email")}</Label>
              <Input
                placeholder={t("register.placeholderEmail")}
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label>{t("register.password")}</Label>
              <Input
                placeholder={t("register.placeholderPassword")}
                type="password"
                value={password}
                onChange={(e) => setPasswrod(e.target.value)}
              />
              <Label>{t("register.confirmPassword")}</Label>
              <Input
                placeholder={t("register.placeholderConfirmPassword")}
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPasswrod(e.target.value)}
              />
              <Margin bottom={"20"} top={"20"}>
                <CheckBox label={t("register.showPasswords")} />
              </Margin>
              <Button block color="black">
                {t("register.signUp")}
              </Button>
            </form>

            <Margin top={"20"} bottom={"30"}>
              <Center horizontal>
                <p>
                  {t("register.haveAccount")}{" "}
                  <Link Link to="/login">
                    {t("register.signIn")}
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

export default RegisterPage;
