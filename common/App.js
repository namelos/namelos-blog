import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider, gql, graphql } from 'react-apollo'
import { client } from './apolloClient'

const schema = gql`
  query name { 
    viewer { name }
  }
`

let Root = () => <h1>Hi...</h1>
Root = graphql(schema)(Root)

const App = () =>
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </ApolloProvider>

export default App