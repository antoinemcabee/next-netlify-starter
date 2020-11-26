import mockPositions from '../mocks/mockPositions';
import mockEvents from '../mocks/mockEvents';
import mockOrgs from '../mocks/mockOrgs';

export const QueryResolvers = {
  getOrgs(parent, args, context) {
    return context.db
      .collection('orgs')
      .find().toArray()
      .then(data => {
        let results = []
        data.forEach(result => {
          let {orgName, orgCity, orgState} = result
          result.push({
            id: result._id,
            orgName,
            orgCity,
            orgState,
          })
        })
        return results
      })
  },
  
  getEvents(parent, args, context) {
    return mockEvents
  },
  getPositions(parent, args, context) {
    return mockPositions
  },
  getOrgById(parent, args, context) {
    for(const org of mockOrgs)
      if(org.orgId == args.orgId)
        return org;
  },
  getOrgById(parent, args, context) {
    for(const org of mockOrgs)
      if(org.orgId == args.orgId)
        return org;
  },
  getEventById(parent, args, context) {
    for(const event of mockEvents)
      if(event.eventId == args.eventId)
        return event;
  },
  getPositionById(parent, args, context) {
    for(const pos of mockPositions)
      if(pos.posId == args.posId)
        return pos;
  }
}