import React, { useState } from "react";
import Input from "./Input";
import GoogleLogo from "../assets/images/google-logo.png";
import FacebookLogo from "../assets/images/facebook-logo.png";
import Divider from "./Divider";
import Button from "./Button";

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
      <Button block color="black">
        Login
      </Button>
      <Divider withOr />
      <Button color="white" block style={{ marginBottom: "12px" }}>
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
