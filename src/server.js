require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('../database/database');

// CONECTANDO COM O BANCO DE DADOS
connection.authenticate()
.then(() => {
    console.log("conexão feita com o banco de dados!")
})
.catch((error) => {
    console.log(error)
})


const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.use('/api', routes);

server.listen(process.env.PORT, () => {
    console.log(`Rodando em ${process.env.BASE}`)
});