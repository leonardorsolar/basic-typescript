export class Pessoa {
    nome: string

    constructor(nome: string) {
        this.nome = nome
    }

    apresentar(): string {
        return `Olá, meu nome é ${this.nome}.`
    }
}
