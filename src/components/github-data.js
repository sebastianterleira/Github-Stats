import styled from "@emotion/styled";
import { RiStarFill } from "react-icons/ri";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

const FavoriteButton = styled("button")`
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
background-color: ${colors.gray.medium};
border: none;
padding: 0.5rem 1rem;
border-radius: 1rem;
font-family: ${typography.text};
font-weight: bold;
color: white;
cursor: pointer;
`;

const GitHubImage = styled("img")`
  max-width: 150px;
`;

export default function GithubData({ github,
  isFavorite,
  onAddFavorite,
  onRemoveFavorite
}) {

  const regularContent = (
    <>
      <RiStarFill color={colors.gray.light} /> Mark as Favorite
    </>
  );

  const favoriteContent = (
    <>
      <RiStarFill color={colors.yellow[500]} /> Remove Favorite
    </>
  );

  return (
    <div>
    <GitHubImage src={github.avatar_url} alt="avatar" />
      <div className="container">
        <h4>{github.login}</h4>
        <p>star</p>
        <p>{github.bio}</p>
        <p>Followers {github.followers}</p>
        <p>Following {github.following}</p>
        <p>Public Repos {github.public_repos}</p>
        <p>Public Gists {github.public_gists}</p>
        <FavoriteButton
        onClick={() =>
          isFavorite ? onRemoveFavorite(github) : onAddFavorite(github)
        }
      >
        {isFavorite ? favoriteContent : regularContent}
      </FavoriteButton>
      </div>
    </div>
  );
}
