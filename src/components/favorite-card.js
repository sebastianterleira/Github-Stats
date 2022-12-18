import styled from "@emotion/styled";

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
  text-decoration: none;
  color: #000000;
  text-decoration:none;
	overflow: hidden;
	transition: all 400ms ease;
	&:hover {
	box-shadow: 4px 4px rgb(0 0 0 / 50%);
	transform: translateY(-6%);
	}
  cursor: default;
  `;

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
  
  
  const ImgGithub = styled("img")`
    width: 40px;
    height: 40px;
    border-radius: 50%;
  `;

function FavoriteCard({item}) {
  return (
    <GithubCard>
      <Content>
        <ImgGithub src={item.avatar_url} alt={item.name} />
        <Text>
          <p>{item.name}</p>
          <p>{item.username}</p>
        </Text>
      </Content>
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.4999 19.0208L5.153 23.1333L6.79362 14.875L0.611328 9.15833L8.97279 8.16666L12.4999 0.520828L16.027 8.16666L24.3884 9.15833L18.2061 14.875L19.8467 23.1333L12.4999 19.0208Z" fill="#F2C94C"/>
      </svg>
    </GithubCard>
  );
}

export default FavoriteCard;