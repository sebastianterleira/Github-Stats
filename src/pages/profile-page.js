import { useState } from "react";
import { useAuth } from "../context/auth-context";
import Input from "../components/input";
import styled from "@emotion/styled";
import { colors, typography } from "../styles"
import { updateUser } from "../services/user-services";
import { tokenKey } from "../config";

const Wrapper = styled.div`
height: 100%;
padding: 48px 74px;
display: flex;
justify-content: center;
flex-direction: column;
`
const Form =styled.form`
display:flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 32px;
`
const Title = styled.h1`
${typography.head.lg}
font-weight: 400;
text-align: center;
Height: 80px
Top: 48px;
padding-bottom:96px;
`

const ButtonUpdate = styled.button`
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
`

function ProfilePage() {
  const {user, setUser} = useAuth();
  const [data, setData] = useState({...user, password:""})
  
  function handleSubmit(event){
    updateUser(data).then((response =>{
      setUser(response)
    })).catch(error=> console.log(error))
    sessionStorage.removeItem(tokenKey)
  }

  function handleChange(event){
    event.preventDefault();
    setData({...data, [event.target.name]: event.target.value})
  }
  return (
    <Wrapper>
      <Title>Profile</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          placeholder="example@mail.com"
          label="Email"
        />
        <Input
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
          placeholder="*******"
          label="Password"
        />
        <Input
          name="first_name"
          type="first_name"
          value={data.first_name}
          onChange={handleChange}
          label="First Name"
        />
        <Input
          name="last_name"
          type="last_name"
          value={data.last_name}
          onChange={handleChange}
          label="Last Name"
        />
        <ButtonUpdate type="submit">Update</ButtonUpdate>
      </Form>
    </Wrapper>
  );
}

export default ProfilePage;
