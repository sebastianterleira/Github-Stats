import { useState, useEffect } from "react";
import { getGithubUser } from "../services/github-service";
import GithubData from "../components/github-data";

function SearchPage({favorites, onAddFavorite, onRemoveFavorite }) {
  const [data, setData] = useState("");
  const [query, setQuery] = useState("");
  
	useEffect(() => {
    getGithubUser(query)
		.then(setData)
		.catch(console.log) 
	}, [query]);

	const isFavorite = Boolean(
    favorites.find((fav) => fav.github_name === github?.name)
  );

	return (
		<div className="grid">
			<div>
          <input onChange={(event) => setQuery(event.target.value)} placeholder="Ingresa el nombre de usuario" />
      </div>
			<article>
        {data && (
          <GithubData 
					github={data}
					onAddFavorite={onAddFavorite}
          onRemoveFavorite={onRemoveFavorite}
          isFavorite={isFavorite}
					>
					</GithubData>
        )}
      </article>
		</div>
	);
}

export default SearchPage;