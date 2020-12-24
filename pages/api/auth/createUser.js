/*
    function: createUser
    input:    user's email, password, db collection name
    return:   user [object] if new user is created || null
*/

const user = require('./getUser')
const bcrypt = require('bcrypt')
const MongoClient = require('mongodb').MongoClient

require('dotenv').config() 

const createUser = ({email, password, dbCollection}) => {

    const client = new MongoClient('mongodb+srv://dbadmin:7pd6MzSD5tMf5EzX@cluster0.aqyod.mongodb.net/volunteer_site?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect( (err) => {

        if(err) return err

        const collection = client.db("volunteer_site").collection(dbCollection)

        collection.findOne({email: email}, (err, existingUser) => {
            if(existingUser == null) { //user not found
                bcrypt.hash(password, 10, async (err, hash) => {
                    if(err) console.log(err, "error hashing")
        
                    result = await collection.insertOne(
                        {
                            email: email,
                            password: hash,
                            createdAt: Date.now(),
                            updatedAt:  Date.now(),
                        }
                    ).catch(err => err)
                        
                    client.close();
                    return user.getUser({email, password, dbCollection})
                });
            } else {
                console.log("Error: email exists in db")
                client.close();
                return null // existing user found
            }
        })
    });
}

export default createUser