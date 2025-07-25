if (!localStorage.getItem("token")) {
  window.location.href = "login.html";
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "login.html";
}

let posts = [];

function renderPosts(postList) {
  const container = document.getElementById("post-list");
  container.innerHTML = "";
  postList.forEach(post => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerText = post.title;
    card.onclick = () => openModal(post);
    container.appendChild(card);
  });
}

function openModal(post) {
  document.getElementById("modal-title").innerText = post.title;
  document.getElementById("modal-body").innerText = post.body;
  document.getElementById("post-modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("post-modal").classList.add("hidden");
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => {
    posts = data;
    renderPosts(posts);
  });

document.getElementById("search").addEventListener("input", (e) => {
  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(e.target.value.toLowerCase())
  );
  renderPosts(filtered);
});