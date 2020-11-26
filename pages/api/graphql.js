import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-micro';

import {QueryResolvers} from './resolvers/QueryResolvers'
import {OrgResolvers} from './resolvers/OrgResolvers'
import {EventResolvers} from './resolvers/EventResolvers'
import {PositionResolvers} from './resolvers/PositionResolvers'

re

const typeDefs = gql`
  scalar Date

  type Query {
    getOrgs: [Org!]
    getEvents: [Event!]
    getPositions: [Position!]
    getOrgById(orgId: ID!): Org
    getEventById(eventId: ID!): Event
    getPositionById(posId: ID!): Position
  }

  type Org {
    orgId: ID!
    name: String
    description: String
    baseLocation: String
    events: [Event!]
  }

  type Event {
    eventId: ID!
    org: Org
    name: String
    location: String
    startDate: Date
    endDate: Date
    positions: [Position!]
  } 

  type Position {
    posId: ID!
    event: Event
    name: String
    destination: String
    startTime: Date
    endTime: Date
    filled: Boolean
    volunteer: String
  }
`

const resolvers = {
  Query: QueryResolvers,
  Org: OrgResolvers,
  Event: EventResolvers,
  Position: PositionResolvers

}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

let db;

const apolloServer = new ApolloServer({ 
    schema,
    context: async () => {
      if (!db) {
        try {
          const dbClient = new MongoClient( process.env.MONGO_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })

          !dbClient.isConnected() ? await dbClient.connect() : null
          db = dbClient.db('volunteer_site')
          
        } catch (e) {
          console.log('--->error while connecting with graphql context (db)', e)
        }
      }
    }
 })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })