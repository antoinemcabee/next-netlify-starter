import mockPositions from '../mocks/mockPositions';
import mockEvents from '../mocks/mockEvents';
import mockOrgs from '../mocks/mockOrgs';

export const PositionResolvers = {
  event(parent, args, context) {
    for(const event of mockEvents)
      if(event.eventId == parent.eventId)
        return event;
  }
}