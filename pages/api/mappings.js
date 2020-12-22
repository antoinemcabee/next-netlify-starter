export const orgMapping = (org) => {
  let { name, 
        industry,
        phone,
        email,
        addressOne,
        description,
      } = org
  return {
    orgId: org._id,
    name,
    industry,
    phone,
    email,
    addressOne,
    description
  }
}

export const eventMapping = (event) => {
  let { orgId, eventName, eventLoc, startDate, endDate } = event
  return {
    eventId: event._id,
    orgId,
    eventName,
    eventLoc,
    startDate,
    endDate,
  }
}

export const posMapping = (pos) => {
  let { name, eventId, destination, startTime, endTime, filled, volunteer } = pos
  return {
    posId: pos._id,
    eventId,
    name,
    destination,
    startTime,
    endTime,
    filled,
    volunteer,
  }
}