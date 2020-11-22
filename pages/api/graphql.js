import { ApolloServer, gql } from 'apollo-server-micro'
import { makeExecutableSchema } from 'graphql-tools'
import { MongoClient } from 'mongodb'

const typeDefs = gql`
  type Orgs {
    id: ID!
    orgName: String!
    orgCity: String!
    orgState: String!
  }

  type Query {
    orgs: [Orgs]!
  }
`

const resolvers = {
  Query: {
    orgs(_parent, _args, _context, _info) {
      return _context.db
        .collection('orgs')
        .findOne()
        .then((data) => {
          console.log(data._id)
          return data.orgCity
        })
    },
  },
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

let db

const apolloServer = new ApolloServer({
  schema,
  context: async () => {
    if (!db) {
      try {
        const dbClient = new MongoClient(
          'mongodb+srv://dbadmin:sSWC75Sb5MJF0lo0@cluster0.aqyod.mongodb.net/<dbname>?retryWrites=true&w=majority',
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        )

        if (!dbClient.isConnected()) await dbClient.connect()
        db = dbClient.db('volunteer_site') // database name
      } catch (e) {
        console.log('--->error while connecting with graphql context (db)', e)
      }
    }

    return { db }
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })