import styled from "@emotion/styled";
import FavoriteCard from "../components/favorite-card";


const Wrapper = styled("div")`
height: 100%;
margin: auto;
display: flex;
gap: 1rem;
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

function FavoritePage({ favorites }) {
  return (
    <Wrapper>
      <Title>Favorites ({favorites?.length})</Title>
      {favorites.map((fav, index) => (
        <FavoriteCard key={`git${index}`} item={fav} />
      ))}
    </Wrapper>
  );
}

export default FavoritePage;
