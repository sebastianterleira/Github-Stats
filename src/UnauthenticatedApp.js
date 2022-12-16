import { useState } from "react";
import LoginForm from "./components/login-form";
import SignupForm from "./components/signup-form";

function UnauthenticatedApp() {
  const [showLogin, setShowLogin] = useState(true);

  function handleLinkChange(event) {
    event.preventDefault();
    setShowLogin(!showLogin)
  }

  return (
    <>
      <h1>Welcome to Github Stats</h1>
      {showLogin ? <LoginForm /> : <SignupForm />}
      <button onClick={handleLinkChange}>
        {showLogin ? "Create Account" : "Log in"}
      </button>
    </>
  )
}

export default UnauthenticatedApp;