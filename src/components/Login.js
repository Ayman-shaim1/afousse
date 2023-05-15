import React, { useState } from "react";
import Input from "./Input";
import GoogleLogo from "../assets/images/google-logo.png";
import FacebookLogo from "../assets/images/facebook-logo.png";
import Divider from "./Divider";
import Button from "./Button";
import Center from "./Center";
import { Link } from "react-router-dom";
import Margin from "./Margin";
import { CheckBox } from "./styles/CheckBox.styled";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");

  return (
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
      <Margin top={"20"} bottom={"30"}>
        <Center horizontal>
          <Link to="/forgot-password">Forgot password ?</Link>
        </Center>
      </Margin>

      <Divider withOr />
      <Button color="white" block style={{ margin: "12px 0" }}>
        <img src={GoogleLogo} className="ic-img" alt="ic-img" /> Login with
        gmail
      </Button>
      <Button color="white" block>
        <img src={FacebookLogo} className="ic-img" alt="ic-img" /> Login with
        facebook
      </Button>
    </form>
  );
};

export default Login;
