export default function GithubData({ github }) {
  return (
    <div>
      <img src={github.avatar_url} alt={github.name} />
      <p>{github.name}</p>
      <p>star</p>
      <p>{github.bio}</p>
    </div>
  );
}
