import { useState } from "react";
import LoginForm from "./components/login-form";
import SignupForm from "./components/signup-form";
import styled from "@emotion/styled";
import { colors, typography, fonts } from "./styles"

const Title = styled.h1`
  ${typography.head.lg}
  font-weight: 400;
  text-align: center;
  width: 264px;
  padding-bottom:40px;
`

const Wrapper = styled.div`
margin: auto;
padding: 48px 74px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center
`

const CustomButton = styled.button`
background: none;
border:none;
color: #2D9CDB;
font-size: 16px;
font-weight: 700;
line-height: 20px;

`

function UnauthenticatedApp() {
  const [showLogin, setShowLogin] = useState(true);

  function handleLinkChange(event) {
    event.preventDefault();
    setShowLogin(!showLogin)
  }

  return (
    <Wrapper>
          <Title>Welcome to Github Stats</Title>
          {showLogin ? <LoginForm /> : <SignupForm />}
          <CustomButton onClick={handleLinkChange}>
            {showLogin ? "Create Account" : "Log in"}
          </CustomButton>
    </Wrapper>
  )
}

export default UnauthenticatedApp;