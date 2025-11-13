# 🧪 Testes Automatizados - WebDojo (Cypress)

Este projeto contém a suíte de **testes automatizados de interface** da aplicação **WebDojo**, utilizando o framework [Cypress](https://www.cypress.io/).  
Os testes validam fluxos críticos e comportamentos esperados da aplicação web.

---

## 📁 Estrutura do Projeto

A estrutura principal dos arquivos de testes está localizada dentro da pasta `cypress/`:

```
cypress/
├── e2e/                     # Diretório principal dos testes end-to-end (arquivos .cy.js)
│
├── fixtures/                # Dados estáticos e mockados usados nos testes
│   ├── cep.json
│   ├── consultancy.json
│   └── document.pdf
│
├── support/                 # Suporte e comandos reutilizáveis
│   ├── actions/             # Ações customizadas organizadas por domínio
│   │   ├── consultancy.actions.js
│   │   ├── github.actions.js
│   │
│   ├── commands.js          # Comandos customizados do Cypress
│   ├── e2e.js               # Configurações e hooks globais para testes e2e
│   ├── utils.js             # Funções utilitárias
│   └── cypress.d.ts         # Tipagem TypeScript opcional (autocomplete)
```

---

## 🚀 Executando o Projeto

### 1. Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **npm** (ou **yarn**)
- **Cypress** (instalado via `npm install`)

---

### 2. Instalação

No diretório raiz do projeto (onde também está a aplicação **WebDojo**):

```bash
npm install
```

---

### 3. Executando a Aplicação WebDojo

Antes de rodar os testes, é necessário iniciar o servidor da aplicação:

```bash
npm run dev
```

> 🔹 Isso iniciará a aplicação em modo de desenvolvimento na porta **3000**.

---

### 4. Executando os Testes

#### 🧭 Interface Gráfica do Cypress

Abra o painel interativo do Cypress para visualizar e rodar os testes manualmente:

```bash
npm run openUi
```

#### ⚙️ Execução Completa (modo headless)

Executa todos os testes em modo **headless** (sem abrir o navegador):

```bash
npm run test
```

> Configuração padrão de viewport: **1440x900**

#### 🔁 Execução Concorrente

Inicia a aplicação **e** executa os testes automaticamente:

```bash
npm run testConc
```

#### 🔐 Teste Específico de Login

Executa apenas o teste do fluxo de login em modo desktop:

```bash
npm run test:login
```

Executa o mesmo teste, mas simulando viewport **mobile**:

```bash
npm run test:login:mobile
```

---

## ⚙️ Configurações do Cypress

As principais configurações de viewport estão incluídas diretamente nos scripts de execução.  
Para ajustes adicionais, consulte o arquivo `cypress.config.js` (ou equivalente) na raiz do projeto.

---

## 📦 Fixtures

Os arquivos em `cypress/fixtures` contêm dados estáticos usados nos testes, como:

- `cep.json` — dados de CEP mockados.
- `consultancy.json` — dados de consultoria simulados.
- `document.pdf` — documento de exemplo usado em testes de upload.

---

## 🧰 Suporte e Utilitários

A pasta `cypress/support` contém:

- **actions/** → Ações modulares reutilizáveis (por exemplo, login, integração GitHub, etc.)
- **commands.js** → Comandos customizados Cypress (`Cypress.Commands.add`)
- **utils.js** → Funções auxiliares reutilizadas em múltiplos testes
- **e2e.js** → Hooks globais e inicializações

---

## 🧾 Boas Práticas

- Estruture os testes por **funcionalidade** dentro de `cypress/e2e`.
- Utilize **fixtures** para dados fixos e previsíveis.
- Centralize interações complexas em **actions** ou **commands**.
- Sempre mantenha os testes **idempotentes** (sem dependência de execução anterior).

---

## 🧑‍💻 Contribuição

1. Crie uma branch para sua feature:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
2. Adicione seus testes e confirme que passam:
   ```bash
   npm run test
   ```
3. Submeta um pull request com a descrição das alterações.

---

## 📜 Licença

Este projeto é de uso interno para o time de desenvolvimento da **WebDojo**.
