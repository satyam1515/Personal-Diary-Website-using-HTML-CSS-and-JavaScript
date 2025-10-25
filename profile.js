// profile.js

document.addEventListener("DOMContentLoaded", () => {
  const nameElement = document.querySelector("p strong:nth-of-type(1)").parentNode;
  const emailElement = document.querySelector("p strong:nth-of-type(2)").parentNode;
  const sinceElement = document.querySelector("p strong:nth-of-type(3)").parentNode;

  const user = JSON.parse(localStorage.getItem("userProfile")) || {
    name: "Koustav Kunal Deka",
    email: "koustav0251q@gmail.com",
    since: "Jan 2024"
  };

  nameElement.innerHTML = `<strong>Name:</strong> ${user.name}`;
  emailElement.innerHTML = `<strong>Email:</strong> ${user.email}`;
  sinceElement.innerHTML = `<strong>Member since:</strong> ${user.since}`;
});
