import styled from "@emotion/styled";
import FollowerCard from "../components/follower-card";
import { useEffect, useState } from "react";
import { getGithubFollowers } from "../services/github-service";
import PaginateNav from "../components/paginate-nav";

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
  const [page, setPage] = useState(1);

    useEffect(() => {
      getGithubFollowers(profile.followers_url + `?per_page=6&page=${page}`).then(setFollowers)
    }, [profile, page])

  return (
    <Wrapper>
      <PaginateNav profile={profile} onPage={setPage} page={page} />
      <Title>Followers ({profile.followers})</Title> 
      {followers.map((fav, index) => (
        <FollowerCard key={`git${index}`} item={fav} />
      ))}
    </Wrapper>
  );
}

export default FollowerPage