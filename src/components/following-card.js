import styled from "@emotion/styled";

function FollowingCard({item}) {

  const GithubCard = styled("a")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  margin: 0 20px 0 20px;
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
`;

  const Content = styled("div")`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: px;
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

  return (
    <GithubCard target="_blank" href={item.html_url} rel="noreferrer">
      <Content>
        <ImgGithub src={item.avatar_url} alt={item.name} />
        <Text>
          <p>{item.login}</p>
        </Text>
      </Content>
    </GithubCard>
  );
}

export default FollowingCard;