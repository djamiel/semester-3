//url for api
const url = "https://jsonplaceholder.typicode.com/users";

//fetches the api
const getUsers = async () => {
  const response = await fetch(url);
  if (!response.ok) {
    const message = "an error has occured. Status: ${response.status}";
    throw new Error(message);
  }

  const data = await response.json();
  return data;
};

const ul = document.querySelector("#persons-list");
//puts the fetches data in html
getUsers()
  .then((data) => {
    console.log("Resolved: ", data);

    let users = data;

    users.map((user) => {
      let li = document.createElement("li");
      let name = document.createElement("h2");
      let email = document.createElement("span");

      name.textContent = user.name;
      email.textContent = user.email;

      li.appendChild(name);
      li.appendChild(email);
      ul.appendChild(li);
    });
  })

  .catch((err) => console.log("Rejected: ", err));
