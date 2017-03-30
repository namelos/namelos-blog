import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { client } from './apolloClient'
import Blog from './Blog'

const App = () =>
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Blog />
    </BrowserRouter>
  </ApolloProvider>

export default App