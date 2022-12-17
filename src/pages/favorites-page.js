import styled from "@emotion/styled";
import FavoriteCard from "../components/favorite-card";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function FavoritePage({ favorites }) {
  return (
    <Wrapper>
      {favorites.map((fav, index) => (
        <FavoriteCard key={`git${index}`} item={fav} />
      ))}
    </Wrapper>
  );
}

export default FavoritePage;
