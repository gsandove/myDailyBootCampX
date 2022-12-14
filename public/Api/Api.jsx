const API_POST = "https://my-daily-bootcamp.herokuapp.com/posts.json";
const API_USERS = "https://my-daily-bootcamp.herokuapp.com/users.json";

export function getPosts() {
  return fetch(API_POST).then((response) => response.json());
}

export function creatUser(user) {
  var userLog = {};
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  fetch(API_USERS, {
    method: "POST",
    headers: myHeaders,
    body: user,
    redirect: "follow",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => (userLog = data));
  return userLog;
}

export function findUser(username) {
  return fetch(API_USERS)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.find((usr) => usr.full_name == username);
    });
}
