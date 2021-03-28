import data from './data.js';
import jsonGraphqlExpress from 'json-graphql-server';
const app = require('express')()

app.use('/api/graphql', jsonGraphqlExpress(data));


module.exports = app