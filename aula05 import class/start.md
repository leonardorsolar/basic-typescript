**tutorial básico** para configurar um projeto TypeScript com uma pasta `src/`, executar com `ts-node`, e criar o `tsconfig.json` adequado.

---

# 🚀 Tutorial: Projeto TypeScript com pasta `src`

### 📁 Estrutura do Projeto

```
├── package.json
├── package-lock.json
├── tsconfig.json
├── start.md
└── src
    ├── index.ts
    └── domain
        └── Pessoa.ts
```

---

## ✅ 1. Inicie o projeto

```bash
npm init -y
```

---

## ✅ 2. Instale as dependências

```bash
npm install typescript ts-node @types/node --save-dev
```

---

## ✅ 3. Crie a pasta `src/` e os arquivos

### `src/domain/Pessoa.ts`

```ts
export class Pessoa {
    nome: string

    constructor(nome: string) {
        this.nome = nome
    }

    apresentar(): string {
        return `Olá, meu nome é ${this.nome}.`
    }
}
```

---

### `src/index.ts`

```ts
import { Pessoa } from "./domain/Pessoa"

const p = new Pessoa("Leonardo")
console.log(p.apresentar())
```

---

## ✅ 4. Crie o arquivo `tsconfig.json`

```json
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "rootDir": "./src",
        "strict": true,
        "esModuleInterop": true,
        "moduleResolution": "node"
    },
    "include": ["src"]
}
```

---

## ✅ 5. Execute o projeto com `ts-node`

```bash
npx ts-node src/index.ts
```

---

## ✅ Dica (opcional): adicione script no `package.json`

```json
"scripts": {
  "start": "ts-node src/index.ts"
}
```

Agora você pode rodar com:

```bash
npm run start
```

---

Se quiser, posso gerar esse projeto como um zip com todos os arquivos prontos. Deseja isso?
