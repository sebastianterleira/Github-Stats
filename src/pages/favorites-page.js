import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const GithubCard = styled("div")`
  border: 2px solid white;
`;

function FavoritePage({ favorites }) {
  return (
    <Wrapper>
      {favorites.map((fav, index) => (
        <GithubCard key={`git${index}`}>
          {fav.name}
					{fav.avatar_url}
        </GithubCard>
      ))}
      <Link to="/">Go back to search</Link>
    </Wrapper>
  );
}

export default FavoritePage;