import { useEffect, useState } from "react";
import GithubData from "./components/github-data";
import { getGithubUser } from "./services/github-service";

function AuthenticatedApp() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getGithubUser("paulotijero").then(setData).catch(console.log);
  }, []);
  console.log(data.name);
  return (
    <div>
      <h1>Search Page</h1>
      <GithubData github={data}></GithubData>
    </div>
  );
}
export default AuthenticatedApp;
