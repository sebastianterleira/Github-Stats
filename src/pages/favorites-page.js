import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Wrapper = styled("div")`
width: 411px;
height: 100%;
margin: auto;
display: flex;
justify-content: center;
flex-direction: column;
`;

const GithubCard = styled("div")`
  border: 2px solid white;
`;

function FavoritePage({ favorites }) {
  return (
    <Wrapper>
      {favorites.map((fav, index) => (
        <GithubCard type={fav.github_login} key={`github${index}`}>
          {fav.github_name}
        </GithubCard>
      ))}
      {/* <Link to="/">Go back to search</Link> */}
    </Wrapper>
  );
}

export default FavoritePage;