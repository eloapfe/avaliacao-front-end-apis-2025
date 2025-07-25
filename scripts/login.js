// Redireciona se já estiver logado
if (localStorage.getItem("token")) {
  window.location.href = "posts.html";
}

document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Login aceito com qualquer usuário e senha
  if (username && password) {
    localStorage.setItem("token", "fake-token");
    localStorage.setItem("user", JSON.stringify({ username }));
    window.location.href = "posts.html";
  } else {
    alert("Preencha todos os campos.");
  }
});
