import { useEffect, useState } from "react";
import GithubData from "./components/github-data";
import { getGithubUser } from "./services/github-service";

function AuthenticatedApp() {
  const [data, setData] = useState("");
  useEffect(() => {
    getGithubUser("SebastianTerleira").then(setData).catch(console.log);
  }, []);
  const [search, setSearch] = useState("");

  return (
    <div className="container">
      <h1>Search Page</h1>
      <div className="grid">
        <div>
          <input onChange={(event) => setSearch(event.target.value)} placeholder="Ingresa el nombre de usuario" />
        </div>
        <div>
          <button onClick={getGithubUser}>Buscar</button>
        </div>
      </div>
      <article>
        {data && (
          <GithubData github={data}></GithubData>
        )}
      </article>
    </div>
  );
}
export default AuthenticatedApp;
