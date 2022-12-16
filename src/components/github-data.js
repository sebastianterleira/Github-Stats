export default function GithubData({ github }) {
  return (
    <div>

      <img src={github.avatar_url} alt="avatar" />
    <div className="container">
      <h4>{github.login}</h4>
      <p>star</p>
      <p>{github.bio}</p>
      <p>Followers {github.followers}</p>
      <p>Following {github.following}</p>
      <p>Public Repos {github.public_repos}</p>
      <p>Public Gists {github.public_gists}</p>
    </div>
    </div>
  );
}
