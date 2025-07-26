// Simulando banco de dados em memória

type User = {
    name: string
    email: string
    password: string
}

class CreateUserUseCase {
    dados: User[] = []

    execute(name: string, email: string, password: string): User {
        const user: User = { name, email, password }
        this.dados.push(user)
        return user
    }
}

// Criando e executando o caso de uso
const createUserUseCase = new CreateUserUseCase()
const novoUsuario = createUserUseCase.execute(
    "Leonardo",
    "leo@gmail.com",
    "123456"
)

// Verificando o resultado
console.log(novoUsuario)
