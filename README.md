# Cypress do Zero à Nuvem 🌐

Este projeto contém os testes automatizados desenvolvidos por mim como aluno do curso **Cypress do Zero à Nuvem**, ministrado por [Walmyr Filho (wlsf82)](https://github.com/wlsf82).

O curso tem como objetivo ensinar, de forma prática e progressiva, como criar testes automatizados utilizando o Cypress.

## 💡 Sobre o projeto

Automatização de testes de interface de uma aplicação front-end fictícia de Central de Atendimento ao Cliente, incluindo testes de:

- Validação de campos obrigatórios
- Upload de arquivos
- Seleção de campos `select`, `checkbox` e `radio`
- Comandos customizados
- Testes com arquivos `fixtures`
- Interceptações e testes avançados (futuros)
- Validação de redirecionamento de links externos

## 📁 Estrutura de pastas

cypress-do-zero-a-nuvem/
├── cypress/
│ ├── e2e/
│ │ ├── CAC-TAT.cy.js
│ │ └── privacy.policy.cy.js
│ ├── fixtures/
│ │ └── example.json
│ └── support/
│ ├── commands.js
│ └── e2e.js
├── cypress.config.js
├── package.json
└── README.md


## ✅ Pré-requisitos

- Node.js (versão 16 ou superior)
- npm (ou yarn/pnpm)
- Git

## 🚀 Instalação

1. Clone este repositório:

```bash
git clone git@github.com:italooliveir/cypress-do-zero-a-nuvem.git
cd cypress-do-zero-a-nuvem
Instale as dependências:
npm install
Instale o Cypress:
npx cypress install

🧪 Executando os testes
Abrir o Cypress com interface (modo interativo)
npx cypress open
Rodar os testes em modo headless (terminal)
npx cypress run

☁️ Integração com Cypress Cloud (futuro)
Este projeto poderá incluir integração com o Cypress Cloud para relatórios e dashboards.

👨‍💻 Autor do curso
Este projeto foi desenvolvido com base no curso ministrado por:

Walmyr Filho - @wlsf82
Canal: YouTube

📘 Licença
Este projeto segue os termos de uso e aprendizado do curso Cypress do Zero à Nuvem, com adaptações e personalizações feitas por mim como aluno.