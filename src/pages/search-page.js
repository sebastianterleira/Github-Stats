import { useState, useEffect } from "react";
import { getGithubUser } from "./services/github-service";
import GithubData from "./components/github-data";

function SearchPage() {
  const [data, setData] = useState("");
  const [query, setQuery] = useState("");

	const [state, setState] = useState({
    status: "idle", // success - error - pending
    data: null,
    error: null,
  });
  const { status, data: pokemon, error } = state;

	useEffect(() => {
    getGithubUser(query)
		.then((setData) => {
			setState({ status: "pending", data: null, error: null })
		})
		.catch((error) => {
			setState({
          status: "error",
          data: null,
          error: "El usuario no existe",
		})
  })
	}, [query]);
}