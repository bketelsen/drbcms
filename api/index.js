import data from './data.js';
import jsonGraphqlExpress from 'json-graphql-server';
const app = require('express')()

app.use('/graphql', jsonGraphqlExpress(data));


module.exports = app