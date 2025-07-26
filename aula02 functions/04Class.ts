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
}

// Criando o objeto
const user = new User("Leonardo", "leo@gmail", "123456")

// Acessando os atributos
console.log(user.name)
console.log(user.email)
console.log(user.password)
console.log(user) // Mostra o objeto completo
