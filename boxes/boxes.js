const createBox = () => {
  let box = document.createElement("div");
  box.className = "box";
  let input = document.createElement("input");
  input.className = "inside-box";
  input.addEventListener("keyup", isValid);
  input.addEventListener("keyup", isPalindrom);
  input.setAttribute("maxlength", 1);
  let button = document.createElement("button");
  button.innerHTML = "X";
  button.className = "x";
  button.addEventListener("click", deleteBox);
  box.appendChild(input);
  box.appendChild(button);
  document.querySelector(".container").appendChild(box);
  let message = document.createElement("p");
  message.innerHTML = "";
  message.className = "message";
  box.appendChild(message);
};
const boxes = () => {
  let numberOfBoxes = inputNumber.value;
  for (let i = 0; i < numberOfBoxes; i++) {
    createBox();
  }
};
const addOneMore = () => {
  inputNumber.value = Number(inputNumber.value) + 1;
  createBox();
  isPalindrom();
};

const deleteBox = (e) => {
  e.target.parentElement.remove();
  inputNumber.value = Number(inputNumber.value) - 1;
  isPalindrom();
};
const isValid = (e) => {
  let letter = e.target.value;
  if (letter.match(/[a-zA-Z ]/gi) === null) {
    e.target.parentElement.lastChild.innerHTML = "Unesite opet";
  } else {
    e.target.parentElement.lastChild.innerHTML = "";
  }
};
const isPalindrom = () => {
  let result = document.querySelector(".res");
  let arr = Array.from(document.querySelectorAll(".inside-box"));
  let word = arr.map((item) => item.value);
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      result.innerHTML = "Nije palindrom!";
      result.style.color = "red";
      return false;
    }
  }
  result.innerHTML = "Jeste palindrom!!!";
  result.style.color = "green";
  return true;
};

let inputNumber = document.querySelector("#input-number");
let submit = document.querySelector("#submit");
let plus = document.querySelector(".plus");
plus.addEventListener("click", addOneMore);
submit.addEventListener("click", boxes);
