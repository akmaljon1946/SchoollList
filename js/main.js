
import UserCreator from "./UserCreator.js";
import render from "./render.js";

const myFormik = document.getElementById('form');

const firstname = document.getElementById('user_name');
const lastname = document.getElementById('user_surname');
const group = document.getElementById('user_group');
const gender = document.getElementById('user_gender');
const tbody = document.getElementById("tbody");

const storage = window.localStorage;
const myUser = storage.getItem("data");
let data;
myUser ? data = JSON.parse(myUser) : data = [];

myFormik.addEventListener('submit', (e) => {
  e.preventDefault();

  let myNewObject = new UserCreator(
    firstname.value,
    lastname.value,
    group.value,
    gender.value
  );

  data.push(myNewObject);
  storage.setItem("data", JSON.stringify(data));
  render(tbody, data);

});

render(tbody, data);

