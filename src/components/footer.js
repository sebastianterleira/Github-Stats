import styled from "@emotion/styled";
import { RiSearchFill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { RiUser3Fill } from "react-icons/ri";
import { colors } from "../styles";

const Navbar = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 50px;
  width: 100%;
  box-shadow: 0px -2px 0px rgba(0, 0, 0, 0.25);
`;

function Footer() {
  return (
    <Navbar>
      <a href="/profile-page">
        <RiUser3Fill style={{height:43,width:43,color:"#BDBDBD"}}/>
      </a>
      <a href="/">
        <RiSearchFill style={{height:43,width:43,color:"#828282"}}/>
      </a>
      <a href="/favorites">
        <AiFillStar style={{height:43,width:43,color:"#BDBDBD"}} />
      </a>
    </Navbar>
  );
}

export default Footer;
