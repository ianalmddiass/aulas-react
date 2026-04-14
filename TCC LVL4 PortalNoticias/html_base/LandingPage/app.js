const API_URL = "http://127.0.0.1:4567";

let allPosts = [];

// fetch posts
async function fetchPosts() {
  try {
    const res = await fetch(API_URL + "/posts");

    if (!res.ok) {
      throw new Error("Erro na resposta da API");
    }

    const data = await res.json();

    allPosts = data;
    renderPosts(allPosts);

  } catch (err) {
    console.error("Erro ao buscar posts:", err);
    document.getElementById("posts-list").innerHTML =
      "<p>Erro ao carregar posts.</p>";
  }
}

// Renderizar posts
function renderPosts(posts) {
  const container = document.getElementById("posts-list");
  container.innerHTML = "";

  if (posts.length === 0) {
    container.innerHTML = "<p>Nenhum post encontrado.</p>";
    return;
  }

  posts.forEach(post => {
    const div = document.createElement("div");
    div.classList.add("post");

    div.innerHTML = `
      <div class="post-title">${post.title}</div>
      <div class="post-category">${post.sport}</div>
    `;

    container.appendChild(div);
  });
}

// Busca no front
function searchPosts() {
  const term = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  const filtered = allPosts.filter(post =>
    post.title.toLowerCase().includes(term) ||
    post.sport.toLowerCase().includes(term)
  );

  renderPosts(filtered);
}
document
    .getElementById("searchInput")
    .addEventListener("keydown", function (event) {
        if (event.key === "Enter"){
            searchPosts();
        }
    }); 

// Inicialização
fetchPosts();