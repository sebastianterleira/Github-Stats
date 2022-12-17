import styled from "@emotion/styled";
import { RiStarFill } from "react-icons/ri";

function FavoriteCard({item}) {
  const Content = styled("div")`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
  `;

  const Text = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `;

  const GithubCard = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    gap: 8px;

    background: #ffffff;
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  `;

  const ImgGithub = styled("img")`
    width: 40px;
    height: 40px;
    border-radius: 50%;
  `;

  return (
    <GithubCard>
      <Content>
        <ImgGithub src={item.avatar_url} alt={item.name} />
        <Text>
          <p>{item.name}</p>
          <p>{item.username}</p>
        </Text>
      </Content>
      <RiStarFill />
    </GithubCard>
  );
}

export default FavoriteCard;