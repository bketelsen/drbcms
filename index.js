import data from './data.js';
import jsonGraphqlExpress from 'json-graphql-server';
const app = require('express')()

app.use('/graphql', jsonGraphqlExpress(data));


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));