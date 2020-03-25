const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//login
routes.post('/sessions', SessionController.create);

//listagem de ongs
routes.get('/ongs', OngController.index);
//cadastro de ongs
routes.post('/ongs', OngController.create);

//listagem de casos especificos da ong
routes.get('/profile', ProfileController.index);

//cadastro de casos
routes.post('/incidents', IncidentController.create);
//listagem de casos
routes.get('/incidents', IncidentController.index);
//deletar casos
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;