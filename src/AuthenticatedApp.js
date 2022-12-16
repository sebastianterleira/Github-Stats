import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./context/auth-context";

import SearchPage from "./pages/search-page";
import FavoritePage from "./pages/favorites-page";
import {
  createFavorite,
  getFavorites,
  removeFavorite,
} from "./services/favorites-services";

function AuthenticatedApp() {
  const { logout } = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites().then(setFavorites);
  }, []);

  function handleAddFavorite(github) {
    const data = {
      github_login: github.login,
      github_name: github.name,
      github_avatar_url: github.avatar_url,
    };

    createFavorite(data)
      .then((newFavorite) => setFavorites([...favorites, newFavorite]))
      .catch(console.log);
  }

  function handleRemoveFavorite(github) {
    const favorite = favorites.find((fav) => fav.github_name === github?.name);

    removeFavorite(favorite.id).then(() => {
      const newFavorites = favorites.filter(
        (fav) => fav.github_name !== github.name
      );

      setFavorites(newFavorites);
    });
  }

  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <SearchPage
              favorites={favorites}
              onAddFavorite={handleAddFavorite}
              onRemoveFavorite={handleRemoveFavorite}
            />
          }
        />
        <Route
          path="favorites"
          element={<FavoritePage favorites={favorites} />}
        />
      </Routes>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
export default AuthenticatedApp;
