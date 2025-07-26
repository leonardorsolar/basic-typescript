let lista_numeros: number[] = [1, 2, 3, 4, 5]
console.log("Lista de números:", lista_numeros)
console.log("Primeiro número:", lista_numeros[0])

let lista_strings: string[] = ["Python", "Java", "C++"]
console.log("Lista de strings:", lista_strings)

let lista_vazia: number[] = []
console.log("Lista vazia:", lista_vazia)
console.log("Tamanho da lista vazia:", lista_vazia.length)

// Adicionar elemento
lista_vazia.push(6)
console.log("Lista vazia após adicionar 6:", lista_vazia)

// Métodos de lista
lista_numeros.push(6)
console.log("Lista de números após adicionar 6:", lista_numeros)

// Remover valor específico (precisa encontrar o índice)
const indice2 = lista_numeros.indexOf(2)
if (indice2 !== -1) {
    lista_numeros.splice(indice2, 1)
}
console.log("Lista de números após remover 2:", lista_numeros)

console.log("---x-----x---")

// Inverter lista
lista_numeros.reverse()
console.log("Lista de números invertida:", lista_numeros)

// Ordenar lista
lista_numeros.sort((a, b) => a - b)
console.log("Lista de números ordenada:", lista_numeros)

// Acessar elementos
console.log("Lista de números:", lista_numeros)
console.log("Primeiro elemento:", lista_numeros[0])
console.log("Último elemento:", lista_numeros[lista_numeros.length - 1])

console.log("---x-----x---")

// Total de elementos
console.log("Total de elementos:", lista_numeros.length)

// Menor valor
console.log("Menor valor:", Math.min(...lista_numeros))

// Maior valor
console.log("Maior valor:", Math.max(...lista_numeros))

console.log("---x-----x---")

// Remover elemento pela posição (índice 1)
lista_numeros.splice(1, 1)
console.log("Lista após remover índice 1:", lista_numeros)

console.log("---x-----x---")

// Soma
const newSoma = lista_numeros.reduce((acc, val) => acc + val, 0)
console.log("Soma dos elementos:", newSoma)

// Média
const media = newSoma / lista_numeros.length
console.log("Média dos elementos:", media)
