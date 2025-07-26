# 🧑‍🏫 Tutorial: Convertendo código Python para TypeScript com entrada de dados

Este tutorial mostra como escrever e executar um código TypeScript

---

## ✅ Etapa 1: Criar o projeto TypeScript

Abra o terminal e siga os passos abaixo:

```bash
# Crie a pasta e entre nela
mkdir projeto-ts
cd projeto-ts

# Inicie o projeto Node.js
npm init -y

# Instale o TypeScript
npm install typescript --save-dev

# Crie o arquivo de configuração do TypeScript
npx tsc --init
```

## ✅ Etapa 2: Criar o arquivo `index.ts`

Crie um arquivo chamado `index.ts` com o seguinte conteúdo:

```ts
console.log("Leo")

let teste = "oi"
console.log(teste)

let numero = 1
console.log(numero)

let nome: string = "leonardo"
```

## ✅ Etapa 3: Executando o programa (4 formas diferentes)

### 🟢 **Forma 1: Compilar e rodar com Node.js**

```bash
npx tsc index.ts          # Compila o TypeScript → index.js
node index.js             # Executa o JavaScript compilado
```

---

### 🟡 **Forma 2: Executar diretamente com `ts-node`**

```bash
npx ts-node index.ts
```

---

### 🔁 **Forma 3: Executar automaticamente com `nodemon` e `ts-node`**

Crie um script no `package.json`:

```json
"scripts": {
  "dev": "nodemon --watch './**/*.ts' --exec 'ts-node' index.ts"
}
```

Agora execute com:

```bash
npm run dev
```

---

### 🔵 **Forma 4: Criar build para produção**

```bash
npx tsc                  # Gera os arquivos .js na pasta atual ou /dist se configurado
node index.js            # Executa a versão de produção
```

> Você pode configurar o `tsconfig.json` para enviar os `.js` para uma pasta `dist` e separar os arquivos de produção dos de desenvolvimento.

---

## ✅ Etapa 4 (opcional): tsconfig recomendado

Abra o arquivo `tsconfig.json` e ajuste:

```json
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "rootDir": "./",
        "outDir": "./dist",
        "strict": true,
        "esModuleInterop": true
    }
}
```

Agora você pode compilar com:

```bash
npx tsc
node dist/index.js
```

Continuar o tutorial:

## Arquivo 01.main.ts

---

## ✅ Etapa 1: Instalar as dependências necessárias

```bash
# Instala prompt-sync para entrada de dados no terminal
npm install prompt-sync

# Instala os tipos TypeScript da biblioteca prompt-sync
npm install --save-dev @types/prompt-sync

# Instala nodemon e ts-node para facilitar o desenvolvimento
npm install --save-dev nodemon ts-node
```

---

## ✅ Etapa 2: Criar o arquivo `01main.ts`

Crie um arquivo chamado `01main.ts` com o seguinte conteúdo:

```ts
import promptSync from "prompt-sync"
const prompt = promptSync()

console.log("Leo")

let nome: string = "leonardo"
let idade: number = 48
let peso: number = 82.5

console.log(nome)
console.log(idade)
console.log(peso)

let name: string = prompt("Digite seu nome: ")
console.log("Olá,", name)
console.log(typeof name)

let age: number = parseInt(prompt("Digite sua idade: "))
console.log("Você tem", age, "anos.")
console.log(typeof age)

let weight: number = parseFloat(prompt("Digite seu peso: "))
console.log("Você pesa", weight, "kg.")
console.log(typeof weight)
```

---

## ✅ Etapa 2: Executando o programa

### 🟡 **Forma 2: Executar diretamente com `ts-node`**

```bash
npx ts-node 01main.ts
```
