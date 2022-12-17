import { useState } from "react";
import { useAuth } from "../context/auth-context";
import Input from "./input";
import styled from "@emotion/styled";
import { colors, typography } from "../styles";

const Form =styled.form`
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 32px;
`
const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  `

const ButtonLogin = styled.button`
  background: #2D9CDB;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border:none;
  color: ${colors.white};
  padding: 8px 16px;
  width: 80px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`

function LoginForm() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    login(formData);
  }

  return (
      <Form onSubmit={handleSubmit}>
        <DivContainer>
          <Input
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="example@mail.com"
            label="Email"
          />
        </DivContainer>
        <DivContainer>
          <Input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="*******"
          label="Password"
          />
        </DivContainer>
        <ButtonLogin type="submit">Login</ButtonLogin>
      </Form>
  
  );
}

export default LoginForm;