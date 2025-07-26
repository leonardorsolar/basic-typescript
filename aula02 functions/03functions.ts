// Define a interface para o formato dos dados do usuário
interface User {
    name: string
    email: string
    password: string
}

// Lista de usuários com tipagem
const dados: User[] = []

// Função para criar usuário
function createUser(response: User): User[] {
    dados.push({
        name: response.name,
        email: response.email,
        password: response.password,
    })

    return dados
}

// Simulando a resposta do frontend
const objetoFrontResponse: User = {
    name: "Leonardo",
    email: "leo@gmail",
    password: "123456",
}

// Criando o usuário
createUser(objetoFrontResponse)

// Exibindo os dados
console.log(dados)
