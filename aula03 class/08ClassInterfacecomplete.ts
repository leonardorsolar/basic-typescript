// ==========================
// 🧱 Entidade: User
// ==========================
class User {
    constructor(
        public name: string,
        public email: string,
        public password: string
    ) {}

    toString() {
        return `User(name=${this.name}, email=${this.email})`
    }
}

// ==========================
// 🔌 Interface do Repositório
// ==========================
interface IUserRepository {
    save(user: User): User
    getAll(): User[]
}

// ==========================
// 🗄️ Implementação do Repositório
// ==========================
class UserRepository implements IUserRepository {
    private dados: User[] = []

    save(user: User): User {
        this.dados.push(user)
        return user
    }

    getAll(): User[] {
        return this.dados
    }
}

// ==========================
// 🔌 Interface do Caso de Uso
// ==========================
interface ICreateUserUseCase {
    execute(name: string, email: string, password: string): User
}

// ==========================
// 💡 Implementação do Caso de Uso
// ==========================
class CreateUserUseCase implements ICreateUserUseCase {
    constructor(private repository: IUserRepository) {}

    execute(name: string, email: string, password: string): User {
        const user = new User(name, email, password)
        return this.repository.save(user)
    }
}

// ==========================
// 🔌 Interface da Controller
// ==========================
interface IUserController {
    handle(): any
}

// ==========================
// 🎮 Implementação da Controller
// ==========================
class UserController implements IUserController {
    constructor(private createUserUseCase: ICreateUserUseCase) {}

    handle() {
        console.log(
            "[UserController] Recebendo requisição para criar usuário..."
        )

        const data = {
            name: "Leonardo",
            email: "leo@gmail.com",
            password: "123456",
        }

        const result = this.createUserUseCase.execute(
            data.name,
            data.email,
            data.password
        )

        return {
            message: "Usuário criado com sucesso",
            data: result.toString(),
        }
    }
}

// ==========================
// 🧪 Execução
// ==========================
const userRepository = new UserRepository()
const createUserUseCase = new CreateUserUseCase(userRepository)
const userController = new UserController(createUserUseCase)

const resposta = userController.handle()
console.log(resposta)

console.log(
    "Usuários no banco:",
    userRepository.getAll().map((u) => u.toString())
)
