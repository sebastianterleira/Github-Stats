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
import Footer from "./components/footer";
import ProfilePage from "./pages/profile-page";


function AuthenticatedApp() {
  const { logout } = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites().then(setFavorites);
  }, []);

  function handleAddFavorite(github) {
    const data = {
      name: github.name,
      username: github.login,
      avatar_url: github.avatar_url,
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
        <Route
          path="profile-page"
          element={<ProfilePage />}
        />
      </Routes>
      <button onClick={logout}>Logout</button>
      <Footer />
    </div>
  );
}
export default AuthenticatedApp;
