import styled from "@emotion/styled";

function RepoCard({item}) {
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

  const ReposCard = styled("div")`
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

  return (
    <ReposCard>
      <Content>
        <Text>
          <p>{item.full_name}</p>
          <p>{item.description}</p>
        </Text>
      </Content>
    </ReposCard>
  );
}

export default RepoCard;