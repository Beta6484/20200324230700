const knex = require('knex');
const configuration = require('../../knexfile');
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development; // Variável de ambiente 
const connection = knex(config); // Conexão de desenvolvimento

module.exports = connection;