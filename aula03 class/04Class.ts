// Classe para representar um usuário
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

// Repositório de usuários (simula um banco de dados)
class UserRepository {
    private dados: User[] = []

    save(user: User): User {
        this.dados.push(user)
        return user
    }

    getAll(): User[] {
        return this.dados
    }
}

// Instanciando o repositório
const userRepository = new UserRepository()

// Criando um usuário
const user = new User("Leonardo", "leo@gmail.com", "123456")

// Salvando no repositório
userRepository.save(user)

// Acessando os dados do repositório
console.log(userRepository.getAll())
