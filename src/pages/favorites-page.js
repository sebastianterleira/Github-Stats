import styled from "@emotion/styled";
import FavoriteCard from "../components/favorite-card";


const Wrapper = styled("div")`
width: 411px;
height: 100%;
margin: auto;
display: flex;
gap: 1rem;
justify-content: center;
flex-direction: column;
`;

function FavoritePage({ favorites }) {
  return (
    <Wrapper>
      {favorites.map((fav, index) => (
        <FavoriteCard key={`git${index}`} item={fav} />
      ))}

      {/* <Link to="/">Go back to search</Link> */}
    </Wrapper>
  );
}

export default FavoritePage;
