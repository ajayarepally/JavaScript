document.addEventListener("DOMContentLoaded", function () {
    let userData = JSON.parse(localStorage.getItem("LoggedInUser"));

    if (!userData) {
        alert("Please log in first.");
        window.location.href = "./loginpage.html"; // Redirect if not logged in
    } else {
        document.querySelector("#userName").textContent = userData.name;
        document.querySelector("#userEmail").textContent = userData.email;
    }

    // Logout Function - Clears All Stored Data
    document.querySelector("#logoutBtn").addEventListener("click", function () {
        localStorage.removeItem("LoggedInUser"); // Remove user session
        localStorage.removeItem("users"); // Erase all stored users (optional)
        confirm("Logged out successfully! All data erased.");
        window.location.href = "./loginpage.html"; // Redirect to login
    });
});
