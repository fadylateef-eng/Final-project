let form = document.querySelector("form");
let email = document.getElementById("email");
let password = document.getElementById("password");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!email.value.includes("@")) {
        alert("Please enter a valid email");
        return;
    }

    if (password.value.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    alert("Login successful");
});
