import styled from "@emotion/styled";
import FollowingCard from "../components/following-card";
import { useEffect, useState } from "react";
import { getGithubFollowing } from "../services/github-service";
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

function FollowingPage({ profile }){

  const [following, setFollowing] = useState([]);
  const [page, setPage] = useState(1);


    useEffect(() => {
      getGithubFollowing(profile.url + `/following?per_page=6&page=${page}`).then(setFollowing)
    }, [profile, page])

  return (
    <Wrapper>
      <PaginateNav profile={profile} onPage={setPage} page={page} />
      <Title>Following ({profile.following})</Title> 
      {following.map((fav, index) => (
        <FollowingCard key={`git${index}`} item={fav} />
      ))}
    </Wrapper>
  );
}

export default FollowingPage