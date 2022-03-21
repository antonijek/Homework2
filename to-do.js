var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItems);

let filteredItems = [];

const createLiElement = (element) => {
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(element));
  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
};
function addItem(e) {
  e.preventDefault();
  var newItem = document.getElementById("item").value;
  itemsArray.push(newItem);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  createLiElement(newItem);
}

function removeItem(e) {
  let newArray = itemsArray.filter(
    (item) =>
      item !==
      e.target.parentElement.innerText.slice(
        0,
        e.target.parentElement.innerText.length - 2
      )
  );
  itemsArray = newArray;
  localStorage.setItem("items", JSON.stringify(itemsArray));
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  filteredItems = [];
  let inputValue = e.target.value.toLowerCase();
  let allItems = Array.from(itemList.children);
  allItems.map((item) => {
    item.addEventListener("click", selectItem);
    if (item.innerText.toLowerCase().indexOf(inputValue) !== 0) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
      filteredItems.push(item);
    }
  });
}

let index = -1;
const listingDown = (e) => {
  if (filteredItems.length === 0) {
    return;
  }
  if (e.key === "ArrowDown") {
    console.log("da");
    filteredItems.forEach((item) => {
      item.style.backgroundColor = "white";
    });
    index++;
    if (index === filteredItems.length) {
      index = 0;
    }
    filteredItems[index].style.backgroundColor = "gray";
  }
};
const listingUp = (e) => {
  if (filteredItems.length === 0) {
    return;
  }
  if (e.key === "ArrowUp") {
    filteredItems.forEach((item) => {
      item.style.backgroundColor = "white";
    });
    index--;
    if (index < 0) {
      index = filteredItems.length - 1;
    }
    filteredItems[index].style.backgroundColor = "gray";
  }
};
const selectItem = (e) => {
  let selectedItem = e.target.innerText.slice(0, e.target.innerText.length - 1);
  filter.value = selectedItem;
  let array = Array.from(itemList.children);
  array.map((item) =>
    item.innerText.slice(0, item.innerText.length - 1) ===
    e.target.innerText.slice(0, item.innerText.length - 1)
      ? (item.style.display = "block")
      : (item.style.display = "none")
  );
};

const selectItemOnEnter = (e) => {
  if (e.key === "Enter") {
    let text = filteredItems[index].innerText.slice(
      0,
      filteredItems[index].innerText.length - 1
    );
    filter.value = text;
    filterItems(e);
  }
};
document.addEventListener("keyup", selectItemOnEnter);
document.addEventListener("keydown", listingDown);
document.addEventListener("keydown", listingUp);
itemsArray.map((item) => {
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.innerText = item;
  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
});
