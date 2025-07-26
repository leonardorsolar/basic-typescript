# **tutorial Api node**:

✅ `nodemon` +
✅ `ts-node` +
✅ TypeScript +
✅ Express com método `GET` +
✅ Arquivo `.gitignore` +
✅ Script pronto no `package.json`

---

## 🚀 API Básica com TypeScript + Nodemon

### 📁 Estrutura Final

```
minha-api/
├── src/
│   └── index.ts
├── .gitignore
├── package.json
├── tsconfig.json
```

---

### ✅ 1. Criar o projeto

```bash
mkdir minha-api
cd minha-api
npm init -y
```

---

### ✅ 2. Instalar as dependências

```bash
npm install express
npm install -D typescript ts-node nodemon @types/node @types/express
```

---

### ✅ 3. Criar `tsconfig.json`

```bash
npx tsc --init
```

Edite o arquivo `tsconfig.json` com as opções básicas:

```jsonc
{
    "compilerOptions": {
        "target": "ES6",
        "module": "CommonJS",
        "rootDir": "./src",
        "outDir": "./dist",
        "strict": true,
        "esModuleInterop": true
    }
}
```

---

### ✅ 4. Criar `.gitignore`

```bash
touch .gitignore
```

Conteúdo:

```gitignore
node_modules
dist
*.log
*.tsbuildinfo
```

---

### ✅ 5. Criar o arquivo principal

📄 `src/index.ts`

```ts
import express from "express"

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.send("API com TypeScript e Nodemon 🚀")
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
```

---

### ✅ 6. Configurar o `nodemon`

📄 Crie um arquivo de config opcional (boa prática):

📄 `nodemon.json`

```json
{
    "watch": ["src"],
    "ext": "ts",
    "ignore": ["dist"],
    "exec": "ts-node ./src/index.ts"
}
```

---

### ✅ 7. Atualizar os scripts no `package.json`

```json
"scripts": {
  "dev": "nodemon"
}
```

---

### ✅ 8. Rodar o projeto

```bash
npm run dev
```

Você verá no terminal:

```
Servidor rodando em http://localhost:3000
```

---

Pronto! Agora você tem uma API TypeScript com hot reload automático via `nodemon`.

Próximos passos: posso te mostrar como adicionar rotas ou separar controllers e services.
