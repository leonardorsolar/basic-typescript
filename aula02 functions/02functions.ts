// Definindo o tipo do usuário
type Usuario = {
    name: string
    email: string
    password: string
}

// Lista de usuários (banco de dados em memória)
const dados: Usuario[] = []

// Função para criar um usuário
function createUser(name: string, email: string, password: string): Usuario[] {
    dados.push({
        name,
        email,
        password,
    })

    return dados
}

// Criando usuários
createUser("Leonardo", "leo@gmail", "123456")
console.log(dados)

createUser("Miguel", "miguel@gmail", "123456")
console.log("resposta", dados)
