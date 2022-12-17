import { useState, useEffect } from "react";
import { getGithubUser } from "../services/github-service";
import GithubData from "../components/github-data";
import { BsGithub } from "react-icons/bs";
import { colors } from "../styles/colors";

import { Routes, Route } from "react-router-dom";
import FollowerPage from "../pages/followers-page";
import {
getGithubFollowers,
} from "../services/github-service";

function SearchPage({ favorites, onAddFavorite, onRemoveFavorite, onFollowers }) {
  const [query, setQuery] = useState([]);
  const [state, setState] = useState({
    status: "idle", // success - error - pending
    data: null,
    error: null,
  });
  const { status, data: github, error } = state;

  // const [followers, setFollowers] = useState([]);

  useEffect(() => {
    getGithubUser(query)
      .then((data) => {
        // setState({
        //   status: "pending",
        // });
        console.log(data);
        setState({
          status: "success",
          data: data,
          error: null,
        });
        console.log(state);
      })
      .catch((error) => { // no muestra el error
        console.log("bet");
        console.log(error);
        setState({
          status: "error",
          data: null,
          error: "El usuario no existe! Intenta de nuevo",
        });
      });
  }, [query]); // al inicio status idle -> loading -> success

  // useEffect(() => {

  // }, []);

  function GetFollowers() {
    getGithubFollowers("pauloTijero").then(onFollowers);
    console.log("setFollowers ------");
    // console.log(followers);
  }

  const isFavorite = Boolean(
    favorites.find((fav) => fav.username === github?.login)
  );

  const regularContent = (
    <>
      <BsGithub color={colors.yellow[500]} /> No Users...
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
            fnFollowers = {GetFollowers}
          />
        )}
        {status === "error" && <p style={{ color: "red" }}>{error}</p>}
        
      </article>
    </div>
  );
}

export default SearchPage;
