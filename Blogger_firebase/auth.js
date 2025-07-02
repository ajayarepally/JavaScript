// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA-ipjk3wclJhadWDtBLGfCdha9mnexWv8",
  authDomain: "fir-e1bca.firebaseapp.com",
  projectId: "fir-e1bca",
  storageBucket: "fir-e1bca.firebasestorage.app",
  messagingSenderId: "71603514665",
  appId: "1:71603514665:web:c3412fad140e7e21f01b38",
  measurementId: "G-ZXSDTYEW9W"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const msg = document.getElementById('loginMessage');
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        msg.style.color = "#388e3c";
        msg.textContent = "Login successful! Redirecting...";
        setTimeout(() => window.location.href = "myblogs.html", 1200);
      })
      .catch((error) => {
        msg.style.color = "#d32f2f";
        msg.textContent = error.message;
      });
  });
}

// Signup
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const msg = document.getElementById('signupMessage');
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        msg.style.color = "#388e3c";
        msg.textContent = "Sign Up successful! Redirecting...";
        setTimeout(() => window.location.href = "myblogs.html", 1200);
      })
      .catch((error) => {
        msg.style.color = "#d32f2f";
        msg.textContent = error.message;
      });
  });
}

