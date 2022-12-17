import styled from "@emotion/styled";
import { RiSearchFill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { RiUser3Fill } from "react-icons/ri";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  padding: 0px;
  gap: 50px;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 66px;
  box-shadow: 0px -2px 0px rgba(0, 0, 0, 0.25);
`;

function Footer() {
  return (
    <Wrapper>
      <a href="/profile-page">
        <RiUser3Fill />
      </a>
      <a href="/">
        <RiSearchFill />
      </a>
      <a href="/favorites">
        <AiFillStar />
      </a>
    </Wrapper>
  );
}

export default Footer;
