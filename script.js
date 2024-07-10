const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Adds a todo item to the list and sets del icon
function addTask() {
  let li, span;

  if(inputBox.value === '') {
    alert("No value entered")
  } else {
    li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    inputBox.value = '';
  } 
  saveData();
} 

// Check whether click event was completing or deleting todo item
listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {              // Toggle complete/incomplete
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {     // Delete todo item
    e.target.parentElement.remove();
    saveData();
  }
}, false);

// Save data in browser
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Refresh data when opening page
function showTaskList() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTaskList();