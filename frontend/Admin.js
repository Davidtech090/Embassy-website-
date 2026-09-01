const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const loginPage = document.getElementById("loginPage");
const dashboard = document.getElementById("dashboard");

loginForm.addEventListener("submit", async function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  loginMessage.textContent = "Logging in...";

  try {
    const response = await fetch("https://your-render-url.onrender.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
      loginMessage.textContent = "";
      loginPage.classList.add("hidden");
      dashboard.classList.remove("hidden");
      localStorage.setItem("token", data.token);
      loadDashboard();
    } else {
      loginMessage.textContent = data.message;
    }
  } catch (error) {
    loginMessage.textContent = "Cannot connect to server";
  }
});

function loadDashboard() {
  // your dashboard code
}
