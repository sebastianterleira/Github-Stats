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
import styled from "@emotion/styled";
import PublicReposPage from "./pages/public-repos-page";
import FollowingPage from "./pages/following-page";

const Wrapper = styled.div`
height: 100%;
margin: auto;
display: flex;
justify-content: space-between;
flex-direction: column;
position: relative;
`

function AuthenticatedApp() {
  const [favorites, setFavorites] = useState([]);
  const [profile, setProfile] = useState([]);
  
  useEffect(() => {
    getFavorites().then(setFavorites);
  }, []);

  function handleAddFavorite(github) {
    const data = {
      name: github?.name,
      username: github?.login,
      avatar_url: github?.avatar_url,
    };

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

  return (
    <>
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
              onGetFollowers={profile?.followers}
              onGetFollowing={profile?.following}
              onProfile={setProfile}
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
        <Route
          path="followers"
          element={<FollowerPage profile={profile}/>}
        />
        <Route
          path="following"
          element={<FollowingPage profile={profile}/>}
        />
      </Routes>
    </Wrapper>
  <Footer />
    </>
  );
}
export default AuthenticatedApp;
