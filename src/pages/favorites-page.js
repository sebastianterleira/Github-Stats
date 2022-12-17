import styled from "@emotion/styled";

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
					<img src={fav.avatar_url} alt={fav.name}/> 
        </GithubCard>
      ))}
    </Wrapper>
  );
}

export default FavoritePage;