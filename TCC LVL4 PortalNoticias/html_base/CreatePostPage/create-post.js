const API_URL = "http://127.0.0.1:4567/posts";

// 🔒 verificar token ao entrar na página
// function checkAuth() {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     alert("Você precisa estar logado.");
//     window.location.href = "../LoginPage/login.html";
//   }
// }

// 🚀 criar post
async function createPost() {
  const title = document.getElementById("title").value;
  const sport = document.getElementById("sport").value;
  const content = document.getElementById("content").value;
  const msg = document.getElementById("msg");

  const token = localStorage.getItem("token");

  msg.textContent = "";

  if (!title || !sport || !content) {
    msg.textContent = "Preencha todos os campos.";
    return;
  }

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ title, sport, content })
    });

    if (!res.ok) {
      throw new Error("Erro ao criar post");
    }

    msg.style.color = "green";
    msg.textContent = "Post criado com sucesso!";

    // limpar campos
    document.getElementById("title").value = "";
    document.getElementById("sport").value = "";
    document.getElementById("content").value = "";

  } catch (err) {
    console.error(err);
    msg.style.color = "red";
    msg.textContent = "Erro ao criar post.";
  }
}

// 🚪 logout
function logout() {
  localStorage.removeItem("token");
  window.location.href = "login.html";
}

// 🔐 roda ao carregar
checkAuth();