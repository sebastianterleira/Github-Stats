import styled from "@emotion/styled";
import FavoriteCard from "../components/favorite-card";


const Wrapper = styled("div")`
width: 411px;
height: 100%;
margin: auto;
display: flex;
justify-content: center;
flex-direction: column;
gap: 16px;
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
