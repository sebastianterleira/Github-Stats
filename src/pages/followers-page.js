import styled from "@emotion/styled";
import FollowerCard from "../components/follower-card";
import { Link } from "react-router-dom";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function FollowerPage({ followers1 }){
  // return <h1>Followers Page Betty</h1>
  return (
    <Wrapper>
      <Link to="/">Go back to Search</Link>
      Followers ({followers1.length})
      {followers1.map((fav, index) => (
        <FollowerCard key={`git${index}`} item={fav} />
      ))}
    </Wrapper>
  );
}

export default FollowerPage