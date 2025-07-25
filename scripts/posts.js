if (!localStorage.getItem("token")) {
  window.location.href = "login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "login.html";
});

const postsContainer = document.getElementById("posts-container");
const searchInput = document.getElementById("search");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeModal = document.getElementById("close-modal");

let posts = [];

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  posts = await res.json();
  renderPosts(posts);
}

function renderPosts(postList) {
  postsContainer.innerHTML = "";
  postList.forEach(post => {
    const card = document.createElement("div");
    card.className = "post-card";
    card.textContent = post.title;
    card.addEventListener("click", () => showPostDetails(post));
    postsContainer.appendChild(card);
  });
}

function showPostDetails(post) {
  modalTitle.textContent = post.title;
  modalBody.textContent = post.body;
  modal.classList.remove("hidden");
}

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = posts.filter(p => p.title.toLowerCase().includes(query));
  renderPosts(filtered);
});

fetchPosts();
