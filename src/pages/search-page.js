import { useState, useEffect } from "react";
import { getGithubUser } from "../services/github-service";
import GithubData from "../components/github-data";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { BsGithub } from "react-icons/bs";
import { colors } from "../styles/colors";

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
        setState({ 
					status: "success",
					data: data,
					error: null,
			});
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
    favorites.find((fav) => fav.github_login === github?.login)
  );

	const regularContent = (
    <>
      <BsGithub color={colors.yellow[500]}/> No Users...
    </>
  );

  return (
    <div className="grid">
      <div>
        <input
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ingresa el nombre de usuario"
        />
      </div>
      <article>
        {status === "idle" && regularContent}
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
    </div>
  );
}

export default SearchPage;
