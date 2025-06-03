# 🧪 Cypress do Zero à Nuvem ☁️

Projeto de testes automatizados desenvolvido durante o curso **"Cypress, do Zero à Nuvem"** da [Talking About Testing](https://talkingabouttesting.courses/).  
O sistema testado é a aplicação **Central de Atendimento ao Cliente TAT**, com o objetivo de aplicar boas práticas em testes E2E utilizando o Cypress.

---

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) — versão `v18.15.0` ou superior
- [npm](https://www.npmjs.com/) — versão `9.5.0` ou superior
- [Git](https://git-scm.com/)

---

## 📦 Instalação do projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/cypress-do-zero-a-nuvem.git

2. Acesse a pasta do projeto:

bash
Copiar
Editar
cd cypress-do-zero-a-nuvem

3. Instale as dependências:
npm install

🧪 Execução dos testes
⚠️ Antes de rodar os testes, copie o arquivo cypress.env.example.json e renomeie para cypress.env.json.
Esse arquivo contém variáveis sensíveis que são ignoradas pelo Git (.gitignore).

Rodar os testes em modo headless (terminal):
npm test

Rodar os testes com a interface gráfica do Cypress:
npm run cy:open

📁 Estrutura do projeto
cypress-do-zero-a-nuvem/
├── cypress/
│   ├── e2e/                  # Casos de teste automatizados
│   ├── fixtures/             # Dados de teste (JSONs)
│   ├── support/
│   │   ├── commands.js       # Comandos customizados
│   │   └── e2e.js            # Configuração global dos testes  
├── cypress.env.example.json # Modelo do arquivo de variáveis de ambiente
├── cypress.config.js        # Configuração do Cypress
├── package.json             # Scripts e dependências do projeto
└── README.md                # Documentação do projeto

☁️ Cypress Cloud
Este projeto está preparado para ser executado com Cypress Cloud, o serviço de relatórios e análise de testes do Cypress.
Você pode configurar um workflow de CI (como GitHub Actions, GitLab CI, CircleCI, etc) para rodar os testes automaticamente a cada alteração no código.

📬 Contato
Dúvidas, sugestões ou colaborações?
Abra uma issue neste repositório ou entre em contato https://github.com/italooliveir
italo