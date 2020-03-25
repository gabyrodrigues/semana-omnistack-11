const express = require('express'); //importa as funcionalidades do express
const cors = require('cors'); //segurança
const routes = require('./routes');

const app = express(); //cria a aplicação

app.use(cors());
app.use(express.json()); //antes de todas as requisições, o express vai no corpo da requisição e converte o json em um objeto javascript
app.use(routes);

/*
* Tipos de parâmetros:
*
* Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) //const params = request.query;
* Route Params: Parâmetros utilizados para identificar recursos //const params = request.params;
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos //const body = request.body;
*/

app.listen(3333); //quando acessar localhost:3333, é acessada a aplicação criada