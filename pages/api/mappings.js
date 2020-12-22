export const orgMapping = (org) => {
  let { name, description, baseLocation } = org
  return {
    orgId: org._id,
    name,
    description,
    baseLocation,
  }
}

export const eventMapping = (event) => {
  let { orgId, name, eventLoc, startDate, endDate } = event
  return {
    eventId: event._id,
    orgId,
    name,
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