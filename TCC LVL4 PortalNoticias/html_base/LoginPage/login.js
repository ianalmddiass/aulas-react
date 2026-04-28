const API_URL = "http://127.0.0.1:4567/session"; // ajuste pra sua rota real

async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  errorMsg.textContent = "";

  if (!username || !password) {
    errorMsg.textContent = "Preencha todos os campos.";
    return;
  }

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    if (!res.ok) {
      throw new Error("Login inválido");
    }

    const data = await res.json();

    // 💾 salvar token (se existir)
    if (data.token) {
      localStorage.setItem("token", data.token);
    }

    // 👉 redirecionar
    window.location.href = "../LandingPage/index.html";

  } catch (err) {
    console.error(err);
    errorMsg.textContent = "Usuário ou senha incorretos.";
  }
}