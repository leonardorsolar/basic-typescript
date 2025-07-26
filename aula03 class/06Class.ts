// ============================================
// 🧱 Entidade: representa a estrutura do usuário
// ============================================
class User {
    constructor(
        public name: string,
        public email: string,
        public password: string
    ) {}

    // Método para exibição legível
    toString(): string {
        return `User(name=${this.name}, email=${this.email})`
    }
}

// ====================================================
// 🗄️ Repositório: simula o banco de dados em memória
// ====================================================
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

// =====================================================
// 💡 Caso de Uso: regra de negócio para criar um usuário
// =====================================================
class CreateUserUseCase {
    constructor(private repository: UserRepository) {}

    execute(name: string, email: string, password: string): User {
        const user = new User(name, email, password)
        return this.repository.save(user)
    }
}

// =====================================================
// 🎮 Controller: simula a entrada de dados de uma "requisição"
// =====================================================
class UserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    handle(): any {
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
