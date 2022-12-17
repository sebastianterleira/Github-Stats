/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import { getGithubUser } from "../services/github-service";
import GithubData from "../components/github-data";
import { BsGithub } from "react-icons/bs";
import { colors } from "../styles"; 
import styled from "@emotion/styled";


const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
	max-width: 640px;
  padding: 0px 16px;
	margin: auto;
  justify-content: space-between;
  `
const Input = styled.input`
margin-top: 32px;
margin-bottom: 16px;
text-align: center;
box-shadow: 2px 2px rgb(0 0 0 / 25%);
border-radius: 4px;
fill: #FFFFFF;
outline: none;
border-style: none;
`
  
function SearchPage({ favorites, onAddFavorite, onRemoveFavorite }) {
  const [query, setQuery] = useState([]);
  const [state, setState] = useState({
    status: "idle", // success - error - pending
    data: null,
    error: null,
  });
  const { status, data: github, error } = state;

  useEffect(() => {
    getGithubUser(query)
      .then((data) => {
        // setState({
        //   status: "pending",
        // });
        setState({
          status: "success",
          data: data,
          error: null,
        });
      })
      .catch((error) => { // no muestra el error
        console.log(error);
        setState({
          status: "error",
          data: null,
          error: "El usuario no existe! Intenta de nuevo",
        });
      });
  }, [query]); // al inicio status idle -> loading -> success

  const isFavorite = Boolean(
    favorites.find((fav) => fav.username === github?.login)
  );

  const regularContent = (
    <>
      <BsGithub color={colors.yellow[500]} /> No Users...
    </>
  );

  return (
      <DivContainer>
        <Input 		
          onChange={(event) => setQuery(event.target.value)}
          placeholder="username"
        />
      <article>
        {status === "idle" && regularContent}
        {status === "success" && (
					<GithubData
					github={github}
					onAddFavorite={onAddFavorite}
					onRemoveFavorite={onRemoveFavorite}
					isFavorite={isFavorite}
          />
					)}
        {status === "error" && <p style={{ color: "red" }}>{error}</p>}
      </article>
    
			</DivContainer>
  );
}

export default SearchPage;
