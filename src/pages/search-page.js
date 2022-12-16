import { useState, useEffect } from "react";
import { getGithubUser } from "./services/github-service";
import GithubData from "./components/github-data";

function SearchPage() {
  const [data, setData] = useState("");
  const [query, setQuery] = useState("");
  
	useEffect(() => {
    getGithubUser(query)
		.then(setData)
		.catch(console.log) 
	}, [query]);

	return (
		<div className="grid">
			<div>
          <input onChange={(event) => setQuery(event.target.value)} placeholder="Ingresa el nombre de usuario" />
      </div>
			<article>
        {data && (
          <GithubData github={data}></GithubData>
        )}
      </article>
		</div>
	);
}

export default SearchPage;