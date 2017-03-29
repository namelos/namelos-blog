import { makeExecutableSchema } from 'graphql-tools'

export const typeDefs = `
type Query {
  hello: String
}
`

export const resolvers = {
  Query: {
    hello: () => 'Hello world'
  }
}

export const schema = makeExecutableSchema({ typeDefs, resolvers })