import { useState, useEffect } from "react";
import { getGithubUser } from "../services/github-service";
import GithubData from "../components/github-data";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { colors, typography } from "../styles";

const StyledInput = styled("input")`
${typography.text.xl}
font-weight: 400;
background: ${colors.white};
border-radius: 4px;
padding: 4px 8px;
::placeholder {
  color: ${colors.gray.light};
}
box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
margin-top:36px;
text-align: center;
`

const Wrapper = styled.div`
width: 411px;
height: 100%;
margin: auto;
display: flex;
justify-content: center;
flex-direction: column;
`


function SearchPage({ favorites, onAddFavorite, onRemoveFavorite }) {
  const [query, setQuery] = useState("");
  const [state, setState] = useState({
    status: "idle", // success - error - pending
    data: null,
    error: null,
  });
  const { status, data: github, error } = state;
  
  useEffect(() => {
    getGithubUser(query)
      .then((data) => {
        setState({ status: "success", data: data, error: null });
      })
      .catch((error) => {
        setState({
          status: "error",
          data: null,
          error: "El usuario no existe! Intenta de nuevo",
        });
      });
  }, [query]); // al inicio status idle -> loading -> success

  const isFavorite = Boolean(
    favorites.find((fav) => fav.github_name === github?.name)
  );

  return (
    <Wrapper>
        <StyledInput
          onChange={(event) => setQuery(event.target.value)}
          placeholder="username"
        />
      <article>
        {status === "pending" && "Loading..."}
        {status === "idle" && "Ready to search"}
        {status === "success" && (
          <GithubData
            github={github}
            onAddFavorite={onAddFavorite}
            onRemoveFavorite={onRemoveFavorite}
            isFavorite={isFavorite}
          />
        )}
        {status === "error" && <p style={{ color: "red" }}>{error}</p>}
         <Link to="/favorites">Go to Favorites</Link>
      </article>
    </Wrapper>
  );
}

export default SearchPage;
