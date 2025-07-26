import promptSync from "prompt-sync"
const prompt = promptSync()

console.log("Leo")

let nome: string = "leonardo"
let idade: number = 48
let peso: number = 82.5

console.log(nome)
console.log(idade)
console.log(peso)

let userName: string = prompt("Digite seu nome: ") ?? ""
console.log("Olá,", userName)
console.log(typeof userName)

let age: number = parseInt(prompt("Digite sua idade: ") ?? "")
console.log("Você tem", age, "anos.")
console.log(typeof age)

let weight: number = parseFloat(prompt("Digite seu peso: ") ?? "")
console.log("Você pesa", weight, "kg.")
console.log(typeof weight)
