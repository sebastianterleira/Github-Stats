import styled from "@emotion/styled";
import FollowerCard from "../components/follower-card";
import { useEffect, useState } from "react";
import { getGithubFollowers } from "../services/github-service";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h1`
  font-weight: 400;
  text-align: center;
  padding-bottom:40px;
  padding-top:16px;
`

function FollowerPage({ profile }){

  const [followers, setFollowers] = useState([]);

    useEffect(() => {
      getGithubFollowers(profile.followers_url).then(setFollowers)
    }, [profile])

  return (
    <Wrapper>
      <Title>Followers ({followers.length})</Title> 
      {followers.map((fav, index) => (
        <FollowerCard key={`git${index}`} item={fav} />
      ))}
    </Wrapper>
  );
}

export default FollowerPage