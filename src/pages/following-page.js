import styled from "@emotion/styled";
import FollowingCard from "../components/following-card";
import { useEffect, useState } from "react";
import { getGithubFollowing } from "../services/github-service";

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

function FollowingPage({ profile }){

  const [following, setFollowing] = useState([]);

    useEffect(() => {
      getGithubFollowing(profile.url + "/following").then(setFollowing)
    }, [profile])

  return (
    <Wrapper>
      <Title>Following ({following.length})</Title> 
      {following.map((fav, index) => (
        <FollowingCard key={`git${index}`} item={fav} />
      ))}
    </Wrapper>
  );
}

export default FollowingPage