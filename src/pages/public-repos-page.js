import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import RepoCard from "../components/repos-card";
import { getGithubRepos } from "../services/github-service";

const Wrapper = styled("div")`
padding: 20px;
margin: auto;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
gap: 16px;
`;

const Title = styled.h1`
  font-weight: 400;
  text-align: center;
  padding-bottom:40px;
  padding-top:16px;
`

function PublicReposPage({profile}){
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getGithubRepos(profile.repos_url).then(setRepos)
  }, [profile]);
  console.log(profile)
  console.log(repos)

  return (
    <Wrapper>
      <Title>Public repos ({repos?.length})</Title>
      {repos?.map((rep, index) => (
        <RepoCard key={`rep${index}`} item={rep} />
      ))}
    </Wrapper>
  );
}

export default PublicReposPage