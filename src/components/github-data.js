/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import { Link } from "react-router-dom";

const FavoriteButton = styled("button")`
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
border: none;
padding: 0.5rem 1rem;
border-radius: 1rem;
font-family: ${typography.text};
font-weight: bold;
cursor: pointer;
margin: auto;
`;

const GitHubImage = styled("img")`
  max-width: 120px;
  max-height: 120px;
  margin-left: 46px;
  border-radius:60px;
  margin: auto;
`;

const ContainerCard = styled("div")`
  margin-top: 16px;
  height:120px;
  display:grid;
  grid-template-columns: 140px 120px;
  grid-row: auto auto;
  grid-column-gap: 1px;
  grid-row-gap: 20px;
  justify-content: center;
`

const CardData = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 120px;
  background-color: #FFFFFF;
  box-shadow: 2px 2px rgb(0 0 0 / 25%);
  border-radius: 4px;
  overflow: hidden;
  transition: all 400ms ease;
  &:hover {
  box-shadow: 4px 4px rgb(0 0 0 / 50%);
  transform: translateY(-3%);
  }
`;

const CountData = styled("p")`
  font-size: 28px;
  font-weight: 400;
  line-height: 35px;
  text-align: center;
`

const LabelData = styled("p")`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  margin-bottom: 12px;
`
const DataImg = styled("div")`
  margin: auto;
  margin-top: 18px;
`

const UXUILinkData = styled("a")`
  padding: 2px;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  margin-bottom: 12px;
  text-decoration: none;
  color: #2fb4cc;
  border: 1px solid #2fb4cc;
  border-radius: 4px;
  transition: all 400ms ease;
  &:hover {
    background: #2fb4cc;
    color: #fff;
  }
`


export default function GithubData({ 
  github,
  isFavorite,
  onAddFavorite,
  onRemoveFavorite,
}) {

  const regularContent = (
    <>
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.7441 18.5845L12.4999 18.4478L12.2556 18.5845L5.85462 22.1676L7.28404 14.9724L7.33857 14.6979L7.13308 14.5079L1.74669 9.52718L9.03168 8.66318L9.30958 8.63022L9.42681 8.3761L12.4999 1.71447L15.5729 8.3761L15.6902 8.63022L15.9681 8.66318L23.2531 9.52718L17.8667 14.5079L17.6612 14.6979L17.7157 14.9724L19.1451 22.1676L12.7441 18.5845Z" fill="#E0E0E0" stroke="#828282"/>
      </svg>
    </>
  );

  const favoriteContent = (
    <>
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.4999 19.0208L5.153 23.1333L6.79362 14.875L0.611328 9.15833L8.97279 8.16666L12.4999 0.520828L16.027 8.16666L24.3884 9.15833L18.2061 14.875L19.8467 23.1333L12.4999 19.0208Z" fill="#F2C94C"/>
      </svg>
    </>
  );

  return (
    <div>
    <GitHubImage src={github.avatar_url} alt="avatar"/>
      <div className="container">
        <FavoriteButton
          onClick={() =>
            isFavorite ? onRemoveFavorite(github) : onAddFavorite(github)
          }
        >
          <h4 css={css`
            font-weight: 800;
            font-size: 20px;
            line-height: 25px;
            text-align: center;
          `}>{github.name === null ? "Olvide ponerme un nombre :v" : github.name}</h4>
          {isFavorite ? favoriteContent : regularContent}
        </FavoriteButton>
        <p css={css`
          font-size: 16px;
          font-weight: 400;
          line-height: 20px;
          text-align: center;
        `}>{github.bio === null ? "Olvide ponerme una biografia :v" : github.bio}</p>
        <ContainerCard>
          <Link css={css`text-decoration:none; color: black;`} to="/followers">
          <CardData>
            <DataImg>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 22.5C28.3152 22.5 31.4946 23.817 33.8388 26.1612C36.183 28.5054 37.5 31.6848 37.5 35V50H12.5V35C12.5 31.6848 13.817 28.5054 16.1612 26.1612C18.5054 23.817 21.6848 22.5 25 22.5ZM8.22 30.015C7.82214 31.357 7.58712 32.7419 7.52 34.14L7.5 35V50H2.28292e-07V38.75C-0.000492018 36.5939 0.795071 34.5136 2.23409 32.908C3.6731 31.3025 5.65425 30.2847 7.7975 30.05L8.2225 30.015H8.22ZM41.78 30.015C44.0048 30.1506 46.094 31.1299 47.6215 32.7531C49.149 34.3763 49.9997 36.5211 50 38.75V50H42.5V35C42.5 33.2675 42.25 31.595 41.78 30.015ZM8.75 15C10.4076 15 11.9973 15.6585 13.1694 16.8306C14.3415 18.0027 15 19.5924 15 21.25C15 22.9076 14.3415 24.4973 13.1694 25.6694C11.9973 26.8415 10.4076 27.5 8.75 27.5C7.0924 27.5 5.50269 26.8415 4.33058 25.6694C3.15848 24.4973 2.5 22.9076 2.5 21.25C2.5 19.5924 3.15848 18.0027 4.33058 16.8306C5.50269 15.6585 7.0924 15 8.75 15ZM41.25 15C42.9076 15 44.4973 15.6585 45.6694 16.8306C46.8415 18.0027 47.5 19.5924 47.5 21.25C47.5 22.9076 46.8415 24.4973 45.6694 25.6694C44.4973 26.8415 42.9076 27.5 41.25 27.5C39.5924 27.5 38.0027 26.8415 36.8306 25.6694C35.6585 24.4973 35 22.9076 35 21.25C35 19.5924 35.6585 18.0027 36.8306 16.8306C38.0027 15.6585 39.5924 15 41.25 15ZM25 0C27.6522 0 30.1957 1.05357 32.0711 2.92893C33.9464 4.8043 35 7.34784 35 10C35 12.6522 33.9464 15.1957 32.0711 17.0711C30.1957 18.9464 27.6522 20 25 20C22.3478 20 19.8043 18.9464 17.9289 17.0711C16.0536 15.1957 15 12.6522 15 10C15 7.34784 16.0536 4.8043 17.9289 2.92893C19.8043 1.05357 22.3478 0 25 0Z" fill="#2D9CDB"/>
              </svg>
            </DataImg>
            <CountData>
              {github.followers}
            </CountData>
            <LabelData>followers</LabelData>
            <UXUILinkData href="#">Ver mas</UXUILinkData>
          </CardData>
        </Link>

        <Link css={css`text-decoration:none; color: black;`} to={"/following"}>
          <CardData> 
            <DataImg>
              <svg width="46" height="54" viewBox="0 0 46 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.6025 37.1475L35.0425 37.59L35.4875 37.1475C36.0098 36.6252 36.6299 36.2108 37.3124 35.9281C37.9949 35.6455 38.7263 35.5 39.465 35.5C40.2037 35.5 40.9351 35.6455 41.6176 35.9281C42.3001 36.2108 42.9202 36.6252 43.4425 37.1475C43.9648 37.6698 44.3792 38.2899 44.6619 38.9724C44.9445 39.6549 45.09 40.3863 45.09 41.125C45.09 41.8637 44.9445 42.5951 44.6619 43.2776C44.3792 43.9601 43.9648 44.5802 43.4425 45.1025L35.0425 53.5L26.6475 45.1025C25.5926 44.0476 25 42.6169 25 41.125C25 39.6331 25.5926 38.2024 26.6475 37.1475C27.7024 36.0926 29.1331 35.5 30.625 35.5C32.1169 35.5 33.5476 36.0926 34.6025 37.1475ZM20 33V53H0C6.02717e-05 47.8039 2.02234 42.8119 5.63867 39.0807C9.25501 35.3496 14.1815 33.1724 19.375 33.01L20 33ZM20 0.5C28.2875 0.5 35 7.2125 35 15.5C35 23.7875 28.2875 30.5 20 30.5C11.7125 30.5 5 23.7875 5 15.5C5 7.2125 11.7125 0.5 20 0.5Z" fill="#F2994A"/>
              </svg>
            </DataImg>
            <CountData>{github.following}</CountData>
            <LabelData>following</LabelData>
            <UXUILinkData href="#">Ver mas</UXUILinkData>
          </CardData>
        </Link>

          <Link css={css`text-decoration:none; color: black;`} to={"/repos"}>
          <CardData>
          <DataImg>
            <svg g width="46" height="54" viewBox="0 0 46 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5 47.5V53.75L18 48.75L10.5 53.75V47.5H9.25C6.92936 47.5 4.70376 46.5781 3.06282 44.9372C1.42187 43.2962 0.5 41.0706 0.5 38.75V7.5C0.5 5.51088 1.29018 3.60322 2.6967 2.1967C4.10322 0.790177 6.01088 0 8 0H43C43.663 0 44.2989 0.263392 44.7678 0.732233C45.2366 1.20107 45.5 1.83696 45.5 2.5V45C45.5 45.663 45.2366 46.2989 44.7678 46.7678C44.2989 47.2366 43.663 47.5 43 47.5H25.5ZM10.5 42.5V37.5H25.5V42.5H40.5V35H9.25C8.25544 35 7.30161 35.3951 6.59835 36.0984C5.89509 36.8016 5.5 37.7554 5.5 38.75C5.5 39.7446 5.89509 40.6984 6.59835 41.4016C7.30161 42.1049 8.25544 42.5 9.25 42.5H10.5ZM10.5 7.5V12.5H15.5V7.5H10.5ZM10.5 15V20H15.5V15H10.5ZM10.5 22.5V27.5H15.5V22.5H10.5Z" fill="#219653"/>
            </svg>
          </DataImg>
            <CountData>{github.public_repos}</CountData>
            <LabelData>public repos</LabelData>
            <UXUILinkData href="#">Ver mas</UXUILinkData>
          </CardData>
          </Link>

          <CardData>
            <DataImg>
              <svg width="50" height="46" viewBox="0 0 50 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 0.5H47.5C48.163 0.5 48.7989 0.763392 49.2678 1.23223C49.7366 1.70107 50 2.33696 50 3V43C50 43.663 49.7366 44.2989 49.2678 44.7678C48.7989 45.2366 48.163 45.5 47.5 45.5H2.5C1.83696 45.5 1.20107 45.2366 0.732233 44.7678C0.263392 44.2989 0 43.663 0 43V3C0 2.33696 0.263392 1.70107 0.732233 1.23223C1.20107 0.763392 1.83696 0.5 2.5 0.5ZM36.16 31.84L45 23L36.16 14.16L32.625 17.7L37.93 23L32.625 28.3025L36.16 31.84ZM12.07 23L17.375 17.6975L13.84 14.16L5 23L13.84 31.84L17.375 28.3L12.07 23ZM23.11 35.5L32.21 10.5H26.89L17.79 35.5H23.11Z" fill="#828282"/>
              </svg>
            </DataImg>
            <CountData>{github.public_gists}</CountData>
            <LabelData>public gists</LabelData>
            <UXUILinkData href="#">Ver mas</UXUILinkData>
          </CardData>
        </ContainerCard>
      </div>
    </div>
  );
}
