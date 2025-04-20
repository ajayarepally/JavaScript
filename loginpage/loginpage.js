document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("#loginForm");
    const signupForm = document.querySelector("#signupForm");
    const signupBtn = document.querySelector("#signupBtn");

    // Show sign-up form when "Sign Up" button is clicked
    signupBtn.addEventListener("click", function () {
        document.querySelector("#logindiv").style.display = "none";
        document.querySelector("#signupDiv").style.display = "block";
    });

    // Sign-Up Handler (Store Name & Email in Local Storage)
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const signupName = document.querySelector("#signupName").value.trim();
        const signupEmail = document.querySelector("#signupEmail").value.trim();
        const signupPassword = document.querySelector("#signupPassword").value.trim();

        if (signupName === "" || signupEmail === "" || signupPassword === "") {
            alert("Please fill in all fields.");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let userExists = users.find(user => user.email === signupEmail);
        if (userExists) {
            alert("User already exists! Please login.");
            document.querySelector("#signupDiv").style.display = "none";
            document.querySelector("#logindiv").style.display = "block";
            return;
        }

        users.push({ name: signupName, email: signupEmail, password: signupPassword });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Sign-up successful! Please log in.");
        document.querySelector("#signupDiv").style.display = "none";
        document.querySelector("#logindiv").style.display = "block";
    });

    // Login Handler (Retrieve Name & Email for Dashboard)
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const loginEmail = document.querySelector("#loginEmail").value.trim();
        const loginPassword = document.querySelector("#loginPassword").value.trim();

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let userFound = users.find(user => user.email === loginEmail && user.password === loginPassword);
        if (userFound) {
            localStorage.setItem("LoggedInUser", JSON.stringify(userFound));
            alert(`Welcome, ${userFound.name}! Redirecting to Dashboard...`);
            window.location.href = "./logindashboard.html"; // Redirect to dashboard
        } else {
            alert("User does not exist. Redirecting to sign-up...");
            document.querySelector("#logindiv").style.display = "none";
            document.querySelector("#signupDiv").style.display = "block";
        }
    });
});
