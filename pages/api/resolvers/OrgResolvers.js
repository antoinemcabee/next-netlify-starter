import mockPositions from '../mocks/mockPositions';
import mockEvents from '../mocks/mockEvents';
import mockOrgs from '../mocks/mockOrgs';

export const OrgResolvers = {
  events(parent, args, context) {
    let events = [];
    for(const event of mockEvents)
      if(event.orgId == parent.orgId)
        events.push(event);
    return events;
  }
}