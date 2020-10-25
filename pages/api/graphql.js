import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    users: [User!]!
    message: String
  }
  type User {
    name: String
  }
`

const resolvers = {
  Query: {
    users(parent, args, context) {
      return [{ name: 'Nextjs' }, {name: "Other"}]
    },
    message(parent, args, context) {
      return "This is a message"
    }
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })