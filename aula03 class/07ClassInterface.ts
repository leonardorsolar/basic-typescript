// ============================================
// 🧱 Entidade: representa a estrutura do usuário
// ============================================
class User {
    constructor(
        public name: string,
        public email: string,
        public password: string
    ) {}

    toString(): string {
        return `User(name=${this.name}, email=${this.email})`
    }
}

// ===================================================
// 🧩 Interface de Repositório (para inversão de dependência)
// ===================================================
interface IUserRepository {
    save(user: User): User
    getAll(): User[]
}

// ====================================================
// 🗄️ Implementação concreta do repositório
// ====================================================
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

// =====================================================
// 💡 Caso de Uso: regra de negócio para criar usuário
// =====================================================
class CreateUserUseCase {
    constructor(private repository: IUserRepository) {}

    execute(name: string, email: string, password: string): User {
        const user = new User(name, email, password)
        return this.repository.save(user)
    }
}

// =====================================================
// 🎮 Controller: simula a entrada de dados
// =====================================================
class UserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    handle(): { message: string; data: string } {
        console.log("[UserController] Recebendo requisição...")

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

// ============================================
// 🧪 Execução (simula a aplicação rodando)
// ============================================

const userRepository = new UserRepository()
const createUserUseCase = new CreateUserUseCase(userRepository)
const userController = new UserController(createUserUseCase)

const resposta = userController.handle()
console.log(resposta)

console.log(
    "Usuários no banco:",
    userRepository.getAll().map((u) => u.toString())
)
