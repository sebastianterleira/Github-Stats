const BASE_URI = "https://api.github.com/users/";

export function getGithubUser(query) {
  return fetch(BASE_URI + query, {
    method: "GET",
    headers: {
      Authorization: `token ${process.env.REACT_APP_SECRET_NAME}` 
    }}).then((response) => response.json());
}

export function getGithubFollowers(user) {
  return fetch(user, {
    method: "GET",
    headers: {
      Authorization: `token ${process.env.REACT_APP_SECRET_NAME}` 
    }}).then((response) => response.json());
}

export function getGithubFollowing(user) {
  return fetch(user, {
    method: "GET",
    headers: {
      Authorization: `token ${process.env.REACT_APP_SECRET_NAME}` 
    }}).then((response) => response.json());
}

export function getGithubRepos(user) {
  return fetch(user, {
    method: "GET",
    headers: {
      Authorization: `token ${process.env.REACT_APP_SECRET_NAME}` 
    }}).then((response) => response.json());
}