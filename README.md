Testes Cypress - Metro Uptime
Testes end-to-end para https://metro-uptime-sbw5.vercel.app/ usando Cypress.
Instalação
Clone o repositório:
bash

git clone https://github.com/seu-usuario/metro-uptime-tests.git
cd metro-uptime-tests

Instale as dependências:
bash

npm install

Estrutura

cypress/
├── e2e/metro-uptime/
│   ├── homepage.cy.js  # Testes da página inicial
│   ├── lines.cy.js     # Testes das linhas
│   └── admin.cy.js     # Testes da área admin
├── support/
│   ├── commands.js     # Comandos reutilizáveis
│   └── e2e.js
└── cypress.config.js   # Configuração

Scripts
Abrir Cypress: npm run cy:open

Rodar testes: npm run cy:run

Testes
Homepage: Verifica carregamento e título.

Lines: Testa navegação para /line/line1 e volta.

Admin: Valida erro 401 em /admin.

Comandos
cy.checkLineStatus(line, status): Checa status de uma linha.

cy.navigateTo(path): Navega para um caminho.

Execução
Interativo: npm run cy:open

Headless: npm run cy:run

Notas
Ajuste seletores conforme o HTML real.

Expanda com testes de responsividade ou mock de APIs.

