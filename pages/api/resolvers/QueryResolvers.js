import mockPositions from '../mocks/mockPositions';
import mockEvents from '../mocks/mockEvents';
import mockOrgs from '../mocks/mockOrgs';
import { ObjectId } from 'mongodb';

import {orgMapping, eventMapping, posMapping} from '../mappings'

export const QueryResolvers = {
  getOrgs(parent, args, context) {
    return context.db
      .collection('orgs')
      .find().toArray()
      .then(data => {
        let orgs = []
        data.forEach(org => {
          orgs.push(orgMapping(org))
        })
        
        return orgs
      })
  },


  getEvents(parent, args, context) {
    return context.db
      .collection('events')
      .find().toArray()
      .then(data => {
        let events = []
        data.forEach(event => {
          events.push(eventMapping(event))
        })
        return events
      })
  },


  getPositions(parent, args, context) {
    return context.db
    .collection('positions')
    .find().toArray()
    .then(data => {
      let positions = []
      data.forEach(pos => {
        positions.push(posMapping(pos))
      })
      return positions
    })
  },


  getOrgById(parent, args, context) {
    return context.db
      .collection('orgs')
      .find({ _id: ObjectId(args.orgId) }).next()
      .then(org => {
        return orgMapping(org)
      })
  },


  getEventById(parent, args, context) {
    return context.db
      .collection('events')
      .find({ _id: ObjectId(args.eventId) }).next()
      .then(event => {
        return eventMapping(event)
      })
  },


  getPositionById(parent, args, context) {
    return context.db
      .collection('positions')
      .find({ _id: ObjectId(args.posId) }).next()
      .then(pos => {
        return posMapping(pos)
      })
  }
}