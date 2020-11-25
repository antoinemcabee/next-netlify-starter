import { ApolloServer, gql } from 'apollo-server-micro'
import { makeExecutableSchema } from 'graphql-tools'
import { MongoClient } from 'mongodb'

require('dotenv').config()

const typeDefs = gql`
  type Orgs {
    id: ID!
    orgName: String!
    orgCity: String!
    orgState: String!
  }

  type Query {
    orgs: [Orgs]!
    getOrgByName(orgName: String!): String!
  }
`

const resolvers = {
  Query: {
    orgs(_parent, _args, _context, _info) {
      return _context.db
        .collection('orgs')
        .find().toArray()
        .then(data => {
          let results = []
          data.forEach(result => {
            let {orgName, orgCity, orgState} = result
            results.push({
              id: result._id,
              orgName,
              orgCity,
              orgState,
            })
          });
          // console.log(results)
          return results
        })
    },
    getOrgByName(parent, args, context, info) {
      return context.db
        .collection('orgs')
        .find({ orgName: args.orgName})
        .then(result => console.log(`Result: ${result}`))
    }
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
        const dbClient = new MongoClient( process.env.MONGO_DB_URI, {
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