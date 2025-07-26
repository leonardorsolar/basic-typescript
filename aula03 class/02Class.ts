// Definindo a classe User
class User {
    name: string
    email: string
    password: string

    constructor(name: string, email: string, password: string) {
        this.name = name
        this.email = email
        this.password = password
    }

    toString(): string {
        return `User(name='${this.name}', email='${this.email}', password='${this.password}')`
    }
}

// Caso de uso para criar usuários
class CreateUserUseCase {
    dados: User[] = []

    execute(name: string, email: string, password: string): User {
        const user = new User(name, email, password)
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
console.log(novoUsuario.toString())
