import mockPositions from '../mocks/mockPositions';
import mockEvents from '../mocks/mockEvents';
import mockOrgs from '../mocks/mockOrgs';
import { ObjectId } from 'mongodb';

export const QueryResolvers = {
  getOrgs(parent, args, context) {
    return context.db
      .collection('orgs')
      .find().toArray()
      .then(data => {
        let results = []
        data.forEach(result => {
          let { name, description, baseLocation } = result
          results.push({
            orgId: result._id,
            name,
            description,
            baseLocation,
          })
        })
        
        return results
      })
  },


  getEvents(parent, args, context) {
    return context.db
      .collection('events')
      .find().toArray()
      .then(data => {
        let results = []
        data.forEach(result => {
          let { orgId, eventName, eventLoc, startDate, endDate } = result
          results.push({
            eventId: result._id,
            orgId,
            eventName,
            eventLoc,
            startDate,
            endDate,
          })
        })
        return results
      })
  },


  getPositions(parent, args, context) {
    return context.db
    .collection('positions')
    .find().toArray()
    .then(data => {
      let results = []
      data.forEach(result => {
        let { name, eventId, destination, startTime, endTime, filled, volunteer } = result
        results.push({
          posId: result._id,
          eventId,
          name,
          destination,
          startTime,
          endTime,
          filled,
          volunteer,
        })
      })
      return results
    })
  },


  getOrgById(parent, args, context) {
    return context.db
      .collection('orgs')
      .find({ _id: ObjectId(args.orgId) }).next()
  },


  getEventById(parent, args, context) {
    return context.db
      .collection('events')
      .find({ _id: ObjectId(args.eventId) }).next()
  },


  getPositionById(parent, args, context) {
    return context.db
      .collection('positions')
      .find({ _id: ObjectId(args.posId) }).next()
  }
}