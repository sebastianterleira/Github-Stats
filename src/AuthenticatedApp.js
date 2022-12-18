import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import SearchPage from "./pages/search-page";
import FavoritePage from "./pages/favorites-page";
import {
  createFavorite,
  getFavorites,
  removeFavorite,
} from "./services/favorites-services";
import Footer from "./components/footer";
import ProfilePage from "./pages/profile-page";
import FollowerPage from "./pages/followers-page";
import {
getGithubFollowers,
getGithubFollowing,
} from "./services/github-service";
import styled from "@emotion/styled";
import PublicReposPage from "./pages/public-repos-page";
import { getGithubRepos } from "./services/github-service";

const Wrapper = styled.div`
width: 411px;
height: 100%;
margin: auto;
display: flex;
justify-content: space-between;
flex-direction: column;
position: relative;
`

function AuthenticatedApp() {
  const [favorites, setFavorites] = useState([]);
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState([]);
  const [followers, setFollowers] = useState([]);
  
  console.log("followers authenticate ---->");
  // console.log(followers);

  useEffect(() => {
    getFavorites().then(setFavorites);
  }, []);

  // useEffect(() => {
  //   getGithubFollowers("pauloTijero").then(setFollowers);
  //   console.log("setFollowers ------");
  //   // console.log(followers);
  // }, []);

  function GetFollowers(user) {
    console.log(user);
    getGithubFollowers(user).then(setFollowers);
    console.log("setFollowers ------");
    console.log(followers);
  }

  function handleAddFavorite(github) {
    const data = {
      name: github?.name,
      username: github?.login,
      avatar_url: github?.avatar_url,
    };

    console.log(data);
    createFavorite(data)
    .then((newFavorite) => setFavorites([...favorites, newFavorite]))
    .catch(console.log);
  }

  function handleRemoveFavorite(github) {
    const favorite = favorites.find((fav) => fav.username === github?.login);

    removeFavorite(favorite.id).then(() => {
      const newFavorites = favorites.filter(
        (fav) => fav.username !== github.login
      );

      setFavorites(newFavorites);
    });
  }

  console.log(repos)
  console.log(profile)

  return (
    <Wrapper>
      <Routes>
        <Route
          path="/"
          element={
            <SearchPage
              favorites={favorites}
              onAddFavorite={handleAddFavorite}
              onRemoveFavorite={handleRemoveFavorite}
              onGetRepos={profile?.repos}
              onProfile={setProfile}
              onRepos={setRepos}
            />
          }
        />
        <Route
          path="favorites"
          element={<FavoritePage favorites={favorites} />}
        />
        <Route
          path="profile-page"
          element={<ProfilePage />}
        />
        <Route
          path="repos"
          element={<PublicReposPage profile={profile}/>}
        />
      </Routes>
      <Footer />
    </Wrapper>
  );
}
export default AuthenticatedApp;
