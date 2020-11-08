import { ApolloServer, gql } from 'apollo-server-micro';

import {QueryResolvers} from './resolvers/QueryResolvers'
import {OrgResolvers} from './resolvers/OrgResolvers'
import {EventResolvers} from './resolvers/EventResolvers'
import {PositionResolvers} from './resolvers/PositionResolvers'


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

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })