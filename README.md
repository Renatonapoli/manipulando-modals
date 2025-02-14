# Lista de Cards de Produtos

Este projeto é um aplicativo Angular que exibe uma lista de produtos em forma de cards e permite que os usuários solicitem contato por meio de um modal.

## 📌 Tecnologias Utilizadas
- Angular
- TypeScript
- Bootstrap
- FontAwesome
- Reactive Forms

## 📂 Estrutura do Projeto


📦 src/  
 ┣ 📂 app/  
 ┃ ┣ 📂 components/  
 ┃ ┃ ┣ 📂 card/  
 ┃ ┃ ┃ ┗ 📂 card-produto/ (Componente para exibição dos cards de produtos)  
 ┃ ┃ ┣ 📂 modals/  
 ┃ ┃ ┃ ┣ 📂 modal-contato/ (Modal para solicitar contato)  
 ┃ ┃ ┃ ┗ 📂 modal-sucesso/ (Modal de sucesso)  
 ┃ ┣ 📂 services/  
 ┃ ┃ ┗ produtos.service.ts (Serviço responsável por fornecer os produtos)  
 ┃ ┣ app.component.ts (Componente principal do projeto)  
 ┃ ┣ app.module.ts (Módulo principal da aplicação)  
 ┣ 📂 assets/ (Arquivos estáticos)  
 ┣ 📂 styles/ (Estilos globais)  

🚀 Instalação e Execução

### 1️⃣ Pré-requisitos
- Node.js e npm instalados
- Angular CLI instalado

### 2️⃣ Clonar o repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```
### 3️⃣ Instalar as dependências
```bash
npm install
```
### 4️⃣ Rodar o projeto
```bash
npm run start
Acesse http://localhost:4200/ no navegador.
```
## 📌 Funcionalidades

✅ Exibição dinâmica de cards de produtos.
✅ Modal de contato para solicitar informações.
✅ Modal de sucesso para confirmação do envio.
✅ Validação de formulário com Reactive Forms.
✅ Recuperação de informações detalhadas ao clicar em "Saiba mais" pelo ID do produto no serviço.

## 🎨 Componentes

### CardProdutoComponent
- Exibe as informações do produto.
- Permite abrir o modal de contato ao clicar em "Saiba mais".
- Recupera informações detalhadas do produto pelo ID no serviço.

### ModalContatoComponent
- Permite ao usuário escolher entre telefone e e-mail para contato.
- Valida os campos antes de permitir o envio.

### ModalSucessoComponent
- Confirma a solicitação de contato com uma mensagem ao usuário.

### 🔧 Serviço
- ProdutosService
- Fornece uma lista de produtos disponíveis para exibição.
- Retorna informações detalhadas do produto ao clicar em "Saiba mais".

### 🛠️ Melhorias Futuras
- Implementar backend para armazenar solicitações.
- Melhorar a responsividade.
- Adicionar testes unitários.

📌 Autor  
👨‍💻 Renato Napoli Guimarães  
📌 Desenvolvedor Frontend Sênior especializado em Angular, React e Vue.js
