const BASE_URI = "https://api.github.com/users/";

export function getGithubUser(query) {
  return fetch(BASE_URI + query).then((response) => response.json());
}
