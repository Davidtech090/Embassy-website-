// MOBILE MENU

function toggleMenu() {

    const navMenu =
        document.getElementById("navMenu");

    navMenu.classList.toggle("active");

}


// REGISTRATION FORM

const registrationForm =
    document.getElementById("registrationForm");


registrationForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const fullName =
            document.getElementById("fullName").value;

        const message =
            document.getElementById("message");


        if (fullName.trim() === "") {

            message.textContent =
                "Please enter your full name.";

            message.style.color = "red";

            return;
        }


        message.textContent =
            "Registration received successfully!";

        message.style.color = "green";


        registrationForm.reset();

    }
);
