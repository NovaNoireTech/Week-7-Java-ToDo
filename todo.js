const inputTask = document.getElementById("input-task");
const listofTodos = document.getElementById("list-of-todos");

function addTodo() {
    if (inputTask.value === '') {
        alert("Please Enter a Todo Item!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputTask.value; 
        listofTodos.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputTask.value = '';
    saveData();
}

listofTodos.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    try {
        localStorage.setItem("data", listofTodos.innerHTML);
    } catch (e) {
        console.error("Error saving data to localStorage:", e);
    }
}

function showTask() {
    try {
        listofTodos.innerHTML = localStorage.getItem("data");
    } catch (e) {
        console.error("Error retrieving data from localStorage:", e);
    }
}

showTask();