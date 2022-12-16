import { useEffect, useState } from "react";
import GithubData from "./components/github-data";
import { getGithubUser } from "./services/github-service";

function AuthenticatedApp() {
  const [data, setData] = useState("");
  const [search, setSearch] = useState(null);
  useEffect(() => {
    getGithubUser(search).then(setData).catch(console.log);
  }, [search]);

  return (
    <div className="container">
      <div className="grid">
        <div>
          <input onChange={(event) => setSearch(event.target.value)} placeholder="Ingresa el nombre de usuario" />
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
