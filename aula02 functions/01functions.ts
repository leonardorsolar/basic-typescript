// Função que imprime um valor
function minhaFuncao(valor1: number): void {
    console.log(valor1)
}

minhaFuncao(10)

// Função que retorna a soma de dois valores
function soma(valor1: number, valor2: number): number {
    return valor1 + valor2
}

// Chamando a função soma sem armazenar o resultado
console.log("Resultado da soma:", soma)

// Chamando a função soma e armazenando o resultado
const result: number = soma(1, 2)
console.log("Resultado da soma:", result)

console.log("Fim do script")
