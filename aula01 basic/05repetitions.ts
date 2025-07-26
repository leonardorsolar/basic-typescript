import promptSync from "prompt-sync"
const prompt = promptSync()

// Repetição simples
for (let x = 0; x < 9; x++) {
    console.log(x)
}
console.log("---x---")

// Repetição com mensagem
for (let x = 0; x < 5; x++) {
    console.log("Repetição número:", x + 1)
}
console.log("Repetições concluídas.")

// Estrutura de banco de dados: lista de objetos com nome e senha
// type Usuario = {
//     nome: string
//     password: number
// }

// const bancodedados: Usuario[] = []

// for (let x = 0; x < 2; x++) {
//     const nome = prompt("Digite seu nome: ")
//     const password = parseInt(prompt("Digite a senha: "))

//     bancodedados.push({ nome, password })

//     console.log("Dados inseridos no banco de dados:", bancodedados)
// }
