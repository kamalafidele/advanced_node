const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql')
const app = express();

const schema = buildSchema(`
   type Query {
    description: String
    price: Float
   }
`);


const root = {
    description: 'White car',
    price: 201
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

const PORT = 5000;
app.listen(PORT, () => console.log(`GRAPHQL SERVER RUNNING ON PORT ${PORT}`));