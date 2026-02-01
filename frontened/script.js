const API = "http://localhost:5500/api";

function signup() {
  fetch("http://localhost:5500/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    })
  })
  .then(res => res.text())
  .then(data => alert(data))
  .catch(() => alert("Backend not running"));
}


function login() {
  fetch(API + "/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email.value, password: password.value })
  }).then(res => res.json())
    .then(data => {
      localStorage.setItem("token", data.token);
      window.location = "dashboard.html";
    });
}

function addTask() {
  fetch(API + "/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: task.value })
  }).then(loadTasks);
}

function loadTasks() {
  fetch("http://localhost:5500/api/tasks")
    .then(res => res.json())
    .then(tasks => {
      list.innerHTML = "";
      tasks.forEach(t => {
        list.innerHTML += `
          <li>
            ${t.title}
            <button onclick="editTask('${t._id}', '${t.title}')">Edit</button>
            <button onclick="deleteTask('${t._id}')">Delete</button>
          </li>
        `;
      });
    });
}

function editTask(id, oldTitle) {
  const newTitle = prompt("Edit task:", oldTitle);

  if (!newTitle) return;

  fetch(`http://localhost:5500/api/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title: newTitle })
  })
  .then(() => loadTasks());
}


function deleteTask(id) {
  fetch(`http://localhost:5500/api/tasks/${id}`, {
    method: "DELETE"
  })
  .then(res => res.text())
  .then(msg => {
    alert(msg);
    loadTasks();
  });
}


if (window.location.pathname.includes("dashboard")) loadTasks();