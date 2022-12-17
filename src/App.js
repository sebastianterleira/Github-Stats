import AuthenticatedApp from "./AuthenticatedApp";
import { useAuth } from "./context/auth-context";
import UnauthenticatedApp from "./UnauthenticatedApp"
import styled from "@emotion/styled";
import { colors, typography } from "./styles"




function App() {
   const { user } = useAuth();
    return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
  
}

export default App;
