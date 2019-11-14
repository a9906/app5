
const express = require('express');
const app = express();
const porta = process.env.PORT || 4000;
const config = require('./config/config.js');
bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const routes = require('./routes/adroutes');   //importar rotas

routes(app); //registar as rotas
app.listen(porta);

console.log('a executar em:' + porta);