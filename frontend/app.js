const API_URL = "http://127.0.0.1:5000/api/hello";

// Função para buscar a mensagem do backend
async function fetchMessage() {
    try {
        const response = await fetch(API_URL, { method: "GET" });
        const data = await response.json();

        // Atualiza o conteúdo do h1 com a mensagem recebida
        document.getElementById("message").innerText = data.message;
    } catch (error) {
        console.error("Erro ao buscar a mensagem:", error);
        document.getElementById("message").innerText = "Erro ao carregar mensagem.";
    }
}

// Chama a função quando a página é carregada
document.addEventListener("DOMContentLoaded", fetchMessage);
