import React, { useState } from "react";
import Input from "./Input";

import Button from "./Button";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPasswrod] = useState("");
  const [confirmPassword, setConfirmPasswrod] = useState("");

  return (
    <form>
      <label>Name</label>
      <Input
        placeholder={"Enter name ..."}
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email</label>
      <Input
        placeholder={"Enter email ..."}
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <Input
        placeholder={"Enter password ..."}
        type="password"
        value={password}
        onChange={(e) => setPasswrod(e.target.value)}
      />
      <label>Confrim password</label>
      <Input
        placeholder={"Enter confirm password ..."}
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPasswrod(e.target.value)}
      />
      <Button block color="primary">
        Register
      </Button>
    </form>
  );
};

export default Register;
