// Função para lidar com a submissão do formulário de criação de usuário
document.getElementById('createUserForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    const name = document.getElementById('name').value; // Obtém o valor do campo "name"
    const email = document.getElementById('email').value; // Obtém o valor do campo "email"

    // Faz uma requisição POST para criar um novo usuário
    const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email }) // Envia os dados do usuário no corpo da requisição
    });

    const result = await response.json(); // Converte a resposta para JSON
    if (response.ok) {
        alert('User created successfully!'); // Exibe uma mensagem de sucesso
    } else {
        alert('Error: ' + result.error); // Exibe uma mensagem de erro
    }
});

// Função para buscar e exibir a lista de usuários
document.getElementById('fetchUsers').addEventListener('click', async () => {
    const response = await fetch('http://localhost:5000/api/users'); // Faz uma requisição GET para obter os usuários
    const users = await response.json(); // Converte a resposta para JSON

    const usersList = document.getElementById('usersList'); // Obtém o elemento da lista de usuários
    usersList.innerHTML = ''; // Limpa a lista de usuários
    users.forEach(user => {
        const li = document.createElement('li'); // Cria um novo elemento de lista
        li.textContent = `${user.name} (${user.email})`; // Define o texto do elemento de lista
        usersList.appendChild(li); // Adiciona o elemento de lista à lista de usuários
    });
});