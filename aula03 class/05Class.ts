// Definindo o tipo para os dados do usuário
type UserData = {
    name: string
    email: string
    password: string
}

// Controlador de Usuário
class UserController {
    handle(): { message: string; data: UserData } {
        console.log("[UserController] Recebendo requisição...")

        // Simulando dados de entrada (como se viessem do frontend ou API)
        const data: UserData = {
            name: "Leonardo",
            email: "leo@gmail.com",
            password: "123456",
        }

        // Chamando o caso de uso com os dados
        const result_response = data

        return {
            message: "Usuário criado com sucesso",
            data: result_response,
        }
    }
}

// Instanciando o controlador
const userController = new UserController()

// Executando o controlador
const response = userController.handle()

// Verificando a resposta
console.log(response)
console.log("Usuário criado com sucesso:", response.data)
