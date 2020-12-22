const { ObjectId } = require('mongodb');

const MongoClient = require('mongodb').MongoClient;

require('dotenv').config()

MongoClient.connect(process.env.DATABASE_URL, { useUnifiedTopology: true }, function(err, client) {

    
    const db = client.db("volunteer_site");
    // db.createCollection("positions")

    db.collection('orgs').insertMany([
          {
            name: "org 1",
            industry: "org 1 industry",
            phone: "123-456-7891",
            email: "org1@testmail.com",
            addressOne: "1 org drive",
            description: "org 1 description"
          },
          {
            name: "org 2",
            industry: "org 2 industry",
            phone: "123-456-7892",
            email: "org2@testmail.com",
            addressOne: "2 org drive",
            description: "org 2 description"
          },
          {
            name: "org 3",
            industry: "org 3 industry",
            phone: "123-456-7893",
            email: "org3@testmail.com",
            addressOne: "3 org drive",
            description: "org 3 description"
          },
          {
            name: "org 4",
            industry: "org 4 industry",
            phone: "123-456-7894",
            email: "org4@testmail.com",
            addressOne: "4 org drive",
            description: "org 4 description"
          },
          {
            name: "org 5",
            industry: "org 5 industry",
            phone: "123-456-7895",
            email: "org5@testmail.com",
            addressOne: "5 org drive",
            description: "org 5 description"
          },
    ])

});

