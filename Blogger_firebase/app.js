// Initialize Firebase (using CDN, not ES6 import)
const firebaseConfig = {
  apiKey: "AIzaSyA-ipjk3wclJhadWDtBLGfCdha9mnexWv8",
  authDomain: "fir-e1bca.firebaseapp.com",
  projectId: "fir-e1bca",
  storageBucket: "fir-e1bca.firebasestorage.app",
  messagingSenderId: "71603514665",
  appId: "1:71603514665:web:c3412fad140e7e21f01b38",
  measurementId: "G-ZXSDTYEW9W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to Firebase Auth
const auth = firebase.auth();

// Modal logic
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const closeLogin = document.getElementById('closeLogin');
const closeSignup = document.getElementById('closeSignup');

loginBtn.onclick = () => loginModal.style.display = 'block';
signupBtn.onclick = () => signupModal.style.display = 'block';
closeLogin.onclick = () => loginModal.style.display = 'none';
closeSignup.onclick = () => signupModal.style.display = 'none';

window.onclick = function(event) {
  if (event.target === loginModal) loginModal.style.display = 'none';
  if (event.target === signupModal) signupModal.style.display = 'none';
};

// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Login successful! Welcome, " + userCredential.user.email);
      loginModal.style.display = 'none';
      // Redirect to myblogs.html after login
      window.location.href = "myblogs.html";
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});

// Handle Sign Up Form Submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Sign Up successful! Welcome, " + userCredential.user.email);
      signupModal.style.display = 'none';
      // Redirect to myblogs.html after signup
      window.location.href = "myblogs.html";
    })
    .catch((error) => {
      alert("Sign Up failed: " + error.message);
    });
});

// Optional: If you want to redirect logged-in users automatically when they visit index.html
auth.onAuthStateChanged(function(user) {
  if (user) {
    // User is logged in, redirect to myblogs.html
    window.location.href = "myblogs.html";
  }
});
