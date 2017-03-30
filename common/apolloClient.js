import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface =
  createNetworkInterface({ uri: 'https://api.github.com/graphql' })

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) req.options.headers = {}
    req.options.headers.Authorization = ''
    next()
  }
}])

export const client = new ApolloClient({ networkInterface })

