/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useAuth } from "../context/auth-context";
import Input from "./input";
import { colors } from "../styles";
import styled from "@emotion/styled";

const ButtonSingUp = styled.button`
  background: #2D9CDB;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border:none;
  color: ${colors.white};
  padding: 8px 16px;
  width: 170px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 32px;
  &:hover{
    background: #1278F5;
  }
`

function SignupForm() {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });
  const { email, password, first_name, last_name } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    signup(formData);
  }

  return (
    <div>
      <form css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
      `}
      onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="example@mail.com"
          label="Email"
        />
        <Input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="*******"
          label="Password"
        />
        <Input
          name="first_name"
          type="first_name"
          value={first_name}
          onChange={handleChange}
          placeholder="*******"
          label="First Name"
        />
        <Input
          name="last_name"
          type="last_name"
          value={last_name}
          onChange={handleChange}
          placeholder="*******"
          label="Last Name"
        />
        <ButtonSingUp type="submit">Create Account</ButtonSingUp>
      </form>
    </div>
  );
}

export default SignupForm;