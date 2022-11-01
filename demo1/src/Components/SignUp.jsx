import React, { useState } from "react";
import { Button } from "./Button";
import { SuccessPage } from "./SuccessPage";

export function SignUp() {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [age, setAge] = useState(0);
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const submitFn = (e) => {
    e.preventDefault();
    if (name === "") setNameErr(true);
    else {
      setNameErr(false);
      setIsSuccess(true);
      reset();
    }
  };

  const reset = () => {
    setName("");
    setAge(0);
    setMobile("");
    setEmail("");
    setPassword("");
    setConPassword("");
  };

  return isSuccess ? (
    <SuccessPage />
  ) : (
    <form>
      <div>
        <label htmlFor="name">Enter your Name : </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameErr && <p style={{ color: "red" }}>Please enter valid name</p>}
      </div>
      <div>
        <label htmlFor="age">Enter your age : </label>
        <input
          id="age"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="mobile">Enter your mobile number : </label>
        <input
          id="mobile"
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Enter your Email : </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="pwd">Password : </label>
        <input
          id="pwd"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cPwd">Confirm Password : </label>
        <input
          id="cPwd"
          type="password"
          value={conPassword}
          onChange={(e) => setConPassword(e.target.value)}
        />
      </div>
      <Button name="Submit" bgColor="green" btnFn={submitFn} />
    </form>
  );
}
