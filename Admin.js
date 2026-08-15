const loginForm =
    document.getElementById("loginForm");

const loginPage =
    document.getElementById("loginPage");

const dashboard =
    document.getElementById("dashboard");

const loginMessage =
    document.getElementById("loginMessage");


loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;


    /*
       DEMO LOGIN ONLY

       This is NOT secure authentication.
       We will replace this with real
       database authentication later.
    */

    if (
        username === "embassyweb" &&
        password === "Davidchahul090"
    ) {

        loginPage.classList.add("hidden");

        dashboard.classList.remove("hidden");

        loginMessage.textContent = "";

        loadDashboard();

    } else {

        loginMessage.textContent =
            "Incorrect username or password.";

    }

});


function logout() {

    dashboard.classList.add("hidden");

    loginPage.classList.remove("hidden");

    document.getElementById("password").value = "";

}


function loadDashboard() {

    document.getElementById("totalMembers")
        .textContent = "0";

    document.getElementById("totalVisitors")
        .textContent = "0";

    document.getElementById("totalRegistrations")
        .textContent = "0";

}
