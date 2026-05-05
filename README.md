## 🚀 EVON Backend Challenge — E-commerce API



API REST que simula o back-end de um e-commerce, integrando-se à API externa [DummyJSON](https://dummyjson.com/).

## 🏗️ Arquitetura e Decisões Técnicas
A aplicação utiliza Node.js (v18+) com ES Modules e segue uma estrutura organizada para garantir manutenibilidade:

* Camada de Services: Centraliza a regra de negócio e a comunicação externa. Implementa Data Mapping para converter os campos da API externa (ex: title -> name) e cálculos financeiros (finalPrice e subtotal).
* Validação (Zod): A aplicação utiliza Zod para validação dos parametros de body e query params. os arquivos ficam em /src/schema
* Tratamento de Erros Global: Utilização de um middleware de erro centralizado que intercepta falhas de negócio (AppError), erros de validação e erros de rede (Axios), sem vazar stack traces.
* Axios Factory: Centralização das chamadas HTTP em um fetchApiService para reaproveitamento de instâncias e configuração de baseURL.
------------------------------
## ⚖️ Justificativa do Uso do express

### Aderência ao escopo do projeto
* O desafio não exige alta performance ou throughput elevado, onde o Fastify poderia se destacar. O Express atende plenamente aos requisitos propostos.

### Simplicidade e produtividade
* O Express possui uma abordagem mais direta e flexível, permitindo uma implementação rápida e focada na organização da aplicação e nas regras de negócio.

### Experiência pratica
* Optei pelo uso do Express por já possuir uma experiência prévia com a ferramenta.
------------------------------
## 🛠️ Ferramentas e Tecnologias
* Node.js (v18+)
* Express
* Zod: validação de dados de entrada
* Axios: comunicação com APIs externas
* Nodemon: atualização automática do servidor em ambiente de desenvolvimento
* Postman: testes e validação dos endpoints
* Dotenv: as variáveis de ambiente foram utilizadas para armazenar a URL da API externa DummyJSON e a porta em que a aplicação será executada.
------------------------------
## 🛣️ API 🔐 Autenticação

| Método | Endpoint | Descrição |
|---|---|---|
| POST | /auth/login | Realiza a autenticação do usuário |

## 📦 Produtos

| Método | Endpoint | Descrição |
|---|---|---|
| GET | /products | Retorna lista de produtos com paginação e filtros |
| GET | /products/:id | Retorna detalhes de um produto específico |

## 🛒 Carrinhos

| Método | Endpoint | Descrição |
|---|---|---|
| POST | /carts | Registra um novo carrinho no sistema |
| PUT | /carts/:id | Modifica os itens de um carrinho existente |

## 🛠️ Sistema e Testes

| Método | Endpoint | Descrição |
|---|---|---|
| GET | /health | Verifica se a API está online |
| GET | /test/products | Fornece dados de produtos para teste |
| GET | /test/users | Lista usuários para realização de testes |

## ⚙️ Configuração e Execução

   1. Instale as dependências:
   
   npm install
   
   2. Configure as Variáveis de Ambiente:
   Crie um arquivo .env baseado no .env.example:
   
   PORT=3000
   EXTERNAL_API_URL=https://dummyjson.com
   
   3. Inicie o servidor:
   
   # Desenvolvimento
   npm run dev
   

