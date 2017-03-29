import express from 'express'
import graphqlHTTP from 'express-graphql'
import { schema, rootValue } from './schema'

const app = express()

app.use('/graphql', graphqlHTTP({
  schema, rootValue, graphiql: true
}))

app.get('*', (req, res) => {
  let html = `
    <div id="root"></div>
    <script src="http://localhost:3001/client.js"></script>
  `

  res.send(html)
})

export default app