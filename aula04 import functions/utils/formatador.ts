export function formatarNome(nome: string): string {
    return (
        nome.trim().charAt(0).toUpperCase() + nome.trim().slice(1).toLowerCase()
    )
}

// export function formatarNome(nome: string): string {
//     return nome
//         .trim()
//         .split(" ")
//         .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
//         .join(" ");
// }
