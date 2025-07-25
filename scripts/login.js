if (localStorage.getItem("token")) {
  window.location.href = "posts.html";
}

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "posts.html";
    } else {
      alert("Usuário ou senha inválidos");
    }
  } catch (err) {
    alert("Erro na autenticação");
  }
});