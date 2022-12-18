import styled from "@emotion/styled";
import { GiPlainCircle } from 'react-icons/gi';

function RepoCard({item}) {
const Content = styled("div")`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
		`;

		const ReposCard = styled("a")`
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding: 8px 12px;
			gap: 8px;
	
			background: #ffffff;
			box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
			border-radius: 4px;
			decoration: none;
			cursor: pointer;
			text-decoration:none;
		`;

	const ContentDesc =styled("div")`
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 16px;
	`

  const Text = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `;

	const RepoName = styled("div")`
	font-size: 16px;
  font-weight: 700;
  line-height: 20px;
	color: #2D9CDB;
	margin-bottom: 4px;
	`
	
	const RepoDescription = styled("div")`
	font-size: 12px;
  font-weight: 400;
  line-height: 15px;
	color: #000000;
	margin-bottom: 4px;
	`

	const ContentDetails = styled("div")`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4.24px;
	border: none;
	margin: auto;
	`;

	const typeColors = {
  JavaScript: "#F9CF30",
  Ruby: "#A90700",
  CSS: "#1D27FF",
  HTML: "#F57D31",
	TypeScript: "#2790FF"
};

const Lenguaje = styled("div")`
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ type }) => typeColors[item.language]};
	`;

	
  return (
		<ReposCard target="_blank" href={item.html_url} rel="noreferrer">
      <Content>
        <Text>
					<RepoName>
          <p>{item.full_name}</p>
					</RepoName>
					<RepoDescription>
          <p>{item.description}</p>
					</RepoDescription>
					<RepoDescription>
						<ContentDesc>
							<ContentDetails>
								<Lenguaje type={item.language}>
									<GiPlainCircle />
								</Lenguaje>
								<p>{item.language === null ? "Lenguaje Desconocido" : item.language}</p>
							</ContentDetails>
							<ContentDetails>
								<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M5.99996 9.63L2.47346 11.604L3.26096 7.64L0.293457 4.896L4.30696 4.42L5.99996 0.75L7.69296 4.42L11.7065 4.896L8.73896 7.64L9.52646 11.604L5.99996 9.63ZM5.99996 8.484L8.12346 9.6725L7.64896 7.286L9.43546 5.6335L7.01896 5.347L5.99996 3.1375L4.98096 5.3475L2.56446 5.6335L4.35096 7.286L3.87646 9.6725L5.99996 8.484Z" fill="#03053D"/>
								</svg>
								<p>{item.stargazers_count}</p>
							</ContentDetails>
							<ContentDetails>
								<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2.5 5.5H6.25C7.13851 5.5 7.87237 4.83784 7.98501 3.98007C7.14426 3.85236 6.5 3.12642 6.5 2.25C6.5 1.2835 7.2835 0.5 8.25 0.5C9.2165 0.5 10 1.2835 10 2.25C10 3.13578 9.34191 3.86785 8.48798 3.98395C8.37096 5.11666 7.41364 6 6.25 6H2.5V7.01772C3.34807 7.13903 4 7.86838 4 8.75C4 9.7165 3.2165 10.5 2.25 10.5C1.2835 10.5 0.5 9.7165 0.5 8.75C0.5 7.86838 1.15193 7.13903 2 7.01772V3.98228C1.15193 3.86097 0.5 3.13162 0.5 2.25C0.5 1.2835 1.2835 0.5 2.25 0.5C3.2165 0.5 4 1.2835 4 2.25C4 3.13162 3.34807 3.86097 2.5 3.98228V5.5ZM1 8.75C1 9.44036 1.55964 10 2.25 10C2.94036 10 3.5 9.44036 3.5 8.75C3.5 8.05964 2.94036 7.5 2.25 7.5C1.55964 7.5 1 8.05964 1 8.75ZM1 2.25C1 2.94036 1.55964 3.5 2.25 3.5C2.94036 3.5 3.5 2.94036 3.5 2.25C3.5 1.55964 2.94036 1 2.25 1C1.55964 1 1 1.55964 1 2.25ZM8.25 1C7.55964 1 7 1.55964 7 2.25C7 2.94036 7.55964 3.5 8.25 3.5C8.94036 3.5 9.5 2.94036 9.5 2.25C9.5 1.55964 8.94036 1 8.25 1Z" fill="black"/>
								</svg>
								<p>{item.forks_count}</p>
							</ContentDetails>
						</ContentDesc>
					</RepoDescription>
        </Text>
      </Content>
    </ReposCard>
  );
}

export default RepoCard;