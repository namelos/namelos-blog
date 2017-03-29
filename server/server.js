import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import { schema } from './schema'

const app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.get('/', (req, res) => {
  let html = `
    <div id="root"></div>
    <script src="http://localhost:3001/client.js"></script>
  `

  res.send(html)
})

export default app