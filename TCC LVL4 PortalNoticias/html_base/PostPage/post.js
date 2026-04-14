const API_URL = "http://127.0.0.1:4567";

// 🔎 pegar ID da URL (?id=123)
function getPostId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// 🔄 buscar post
async function fetchPost() {
  const id = getPostId();

  if (!id) {
    document.getElementById("post-content").innerHTML =
      "<p>Post não encontrado.</p>";
    return;
  }

  try {
    const res = await fetch(`${API_URL}/posts/${id}`);

    if (!res.ok) {
      throw new Error("Erro ao buscar post");
    }

    const post = await res.json();

    renderPost(post);

  } catch (err) {
    console.error(err);
    document.getElementById("post-content").innerHTML =
      "<p>Erro ao carregar o post.</p>";
  }
}

// 🧱 renderizar
function renderPost(post) {
  const container = document.getElementById("post-content");

  container.innerHTML = `
    <h1 class="post-title">${post.title}</h1>
    <div class="post-category">${post.sport}</div>
    <p class="post-content">${post.content}</p>
  `;
}

// 🔙 voltar
function goHome() {
  window.location.href = "index.html";
}

// 🚀 iniciar
fetchPost();