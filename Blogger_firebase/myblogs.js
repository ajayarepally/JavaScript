// Initialize Firebase
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
const db = firebase.firestore();

// Handle blog submission with image URL
document.getElementById('blogForm').addEventListener('submit', function(e) {
  e.preventDefault();
  console.log("Form submitted");
  const user = firebase.auth().currentUser;
  if (!user) {
    alert("You must be logged in to post a blog.");
    window.location.href = "login.html";
    return;
  }
  const title = document.getElementById('blogTitle').value;
  const content = document.getElementById('blogContent').value;
  const imageUrl = document.getElementById('blogImageUrl').value.trim();

  db.collection('blogs').add({
    title: title,
    content: content,
    userId: user.uid,
    userEmail: user.email, // Store user email for display
    imageUrl: imageUrl || null,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    alert('Blog published!');
    document.getElementById('blogForm').reset();
  }).catch((error) => {
    alert("Error publishing blog: " + error.message);
    console.error("Error publishing blog:", error);
  });
});

// Attach delete event listeners
function attachDeleteListeners(containerSelector = '#blogsList') {
  document.querySelectorAll(`${containerSelector} .delete-btn`).forEach(button => {
    button.addEventListener('click', function(e) {
      const blogId = this.getAttribute('data-id');
      if (confirm('Are you sure you want to delete this blog?')) {
        db.collection('blogs').doc(blogId).delete()
          .then(() => {
            alert('Blog deleted!');
          })
          .catch(error => {
            alert('Error deleting blog: ' + error.message);
            console.error("Error deleting blog:", error);
          });
      }
    });
  });
}

// Render a blog card (reusable function)
function renderBlogCard(blog, container, showDelete = false) {
  const imageHtml = blog.imageUrl
    ? `<img src="${blog.imageUrl}" alt="Blog image" class="blog-image">`
    : '';
  const userInfo = blog.userEmail
    ? `<div class="blog-user">Posted by: ${blog.userEmail}</div>`
    : '';
  const deleteButton = showDelete
    ? `<button class="delete-btn" data-id="${blog.id}">Delete</button>`
    : '';
  container.innerHTML += `
    <div class="blog-card" data-id="${blog.id}">
      ${imageHtml}
      <h3>${blog.title}</h3>
      ${userInfo}
      <p>${blog.content}</p>
      ${deleteButton}
    </div>
  `;
}

// Load all users' blogs
function loadAllBlogs() {
  const allBlogsList = document.getElementById('allBlogsList');
  allBlogsList.innerHTML = 'Loading all blogs...';

  db.collection('blogs')
    .orderBy('createdAt', 'desc')
    .onSnapshot((snapshot) => {
      allBlogsList.innerHTML = '';
      if (snapshot.empty) {
        allBlogsList.innerHTML = '<p>No blogs yet.</p>';
        return;
      }
      snapshot.forEach((doc) => {
        const blog = { id: doc.id, ...doc.data() };
        renderBlogCard(blog, allBlogsList, false); // No delete button for all blogs
      });
    }, (error) => {
      allBlogsList.innerHTML = '<p>Error loading all blogs: ' + error.message + '</p>';
      console.error("Error loading all blogs:", error);
    });
}

// Load current user's blogs
function loadMyBlogs() {
  const user = firebase.auth().currentUser;
  if (!user) {
    window.location.href = "login.html";
    return;
  }
  const blogsList = document.getElementById('blogsList');
  blogsList.innerHTML = 'Loading your blogs...';

  db.collection('blogs')
    .where('userId', '==', user.uid)
    .orderBy('createdAt', 'desc')
    .onSnapshot((snapshot) => {
      blogsList.innerHTML = '';
      if (snapshot.empty) {
        blogsList.innerHTML = '<p>No blogs yet. Start writing!</p>';
        return;
      }
      snapshot.forEach((doc) => {
        const blog = { id: doc.id, ...doc.data() };
        renderBlogCard(blog, blogsList, true); // Show delete button for my blogs
      });
      attachDeleteListeners('#blogsList');
    }, (error) => {
      blogsList.innerHTML = '<p>Error loading blogs: ' + error.message + '</p>';
      console.error("Error loading blogs:", error);
    });
}

// Logout
document.getElementById('logoutBtn').addEventListener('click', function() {
  firebase.auth().signOut().then(() => {
    window.location.href = "index.html";
  }).catch(error => {
    alert('Error signing out: ' + error.message);
    console.error("Error signing out:", error);
  });
});

// Load blogs on page load (and redirect if not logged in)
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    loadAllBlogs();
    loadMyBlogs();
  } else {
    window.location.href = "login.html";
  }
});

// DEBUG: Log script loaded
console.log("myblogs.js loaded");
