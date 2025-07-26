// Definindo o tipo da pessoa
type Pessoa = {
    nome: string
    password: number
    email: string
}

// Criando o objeto
const pessoa: Pessoa = {
    nome: "leo",
    password: 1234,
    email: "leo@gmail.com",
}

// Exibindo informações
console.log(pessoa)
console.log("Objeto criado:", pessoa)
console.log("Nome:", pessoa.nome)
console.log("Senha:", pessoa.password)
console.log("Email:", pessoa.email)
console.log("Objeto manipulado com sucesso.")
