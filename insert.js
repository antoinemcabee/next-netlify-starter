const { ObjectId } = require('mongodb');

const MongoClient = require('mongodb').MongoClient;

require('dotenv').config()

MongoClient.connect(process.env.MONGO_DB_URI, { useUnifiedTopology: true }, function(err, client) {

    
    const db = client.db("volunteer_site");
    // db.createCollection("positions")

    db.collection('positions').insertMany([
        {
            eventId: ObjectId("5fc0311f622b00663715ce25"),
            orgId: ObjectId("5fb9ced996692eb0bce3183e"),
            name: 'Position 111',
            destination: 'Destination of Position 111',
            startTime: new Date("6-23-2022"),
            endTime: new Date("6-23-2022"),
            filled: false,
            volunteer: 'Volunteer 111'
          },
          {
            eventId: ObjectId("5fc0311f622b00663715ce25"),
            orgId: ObjectId("5fb9ced996692eb0bce3183e"),
            name: 'Position 112',
            destination: 'Destination of Position 112',
            startTime: new Date("8-12-2020"),
            endTime: new Date("8-12-2022"),
            filled: true,
            volunteer: 'Volunteer 112'
          },
          {
            eventId: ObjectId("5fc0311f622b00663715ce25"),
            orgId: ObjectId("5fb9ced996692eb0bce3183e"),
            name: 'Position 113',
            destination: 'Destination of Position 113',
            startTime: new Date("11-14-2020"),
            endTime: new Date("11-14-2020"),
            filled: false,
            volunteer: 'Volunteer 113'
          },
          {
            eventId: ObjectId("5fc031f3622b00663715ce27"),
            orgId: ObjectId("5fb9dd6896692eb0bce3183f"),
            name: 'Position 121',
            destination: 'Destination of Position 121',
            startTime: new Date(2012, 1, 2, 13).getTime(),
            endTime: new Date(2012, 1, 2, 14).getTime(),
            filled: false,
            volunteer: 'Volunteer 121'
          },
          {
            eventId: ObjectId("5fc031f3622b00663715ce27"),
            orgId: ObjectId("5fb9dd6896692eb0bce3183f"),
            name: 'Position 122',
            destination: 'Destination of Position 122',
            startTime: new Date(2012, 1, 2, 14).getTime(),
            endTime: new Date(2012, 1, 2, 15).getTime(),
            filled: true,
            volunteer: 'Volunteer 122'
          },
          {
            eventId: ObjectId("5fc031f3622b00663715ce27"),
            orgId: ObjectId("5fb9dd6896692eb0bce3183f"),
            name: 'Position 123',
            destination: 'Destination of Position 123',
            startTime: new Date(2012, 1, 2, 15).getTime(),
            endTime: new Date(2012, 1, 2, 16).getTime(),
            filled: false,
            volunteer: 'Volunteer 123'
          },
          {
            eventId: ObjectId("5fc04067c28dd0aa6052968c"),
            orgId: ObjectId("5fbdd2f886eebc7b034f1e49"),
            name: 'Position 131',
            destination: 'Destination of Position 131',
            startTime: new Date(2013, 1, 3, 13).getTime(),
            endTime: new Date(2013, 1, 3, 14).getTime(),
            filled: false,
            volunteer: 'Volunteer 131'
          },
          {
            eventId: ObjectId("5fc04067c28dd0aa6052968c"),
            orgId: ObjectId("5fbdd2f886eebc7b034f1e49"),
            name: 'Position 132',
            destination: 'Destination of Position 132',
            startTime: new Date(2013, 1, 3, 14).getTime(),
            endTime: new Date(2013, 1, 3, 15).getTime(),
            filled: true,
            volunteer: 'Volunteer 132'
          },
    ])

});

