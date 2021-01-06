/*
    function: updateUser
    input:    user's email, password, db collection name
    return:   error if db connection failed || user object
*/

const bcrypt = require('bcrypt')
const MongoClient = require('mongodb').MongoClient

require('dotenv').config() 

const updateUser = ({email, dbCollection, update}) => {

    const client = new MongoClient(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    
    let hashed = ''

    if(update.password) {
        bcrypt.hash(update.password, 10, async (err, hash) => {
            if(err) console.log(err, "error hashing")
            hashed = hash
        })
    }

    client.connect(err => {

        if(err) return err

        const  collection = client.db("volunteer_site").collection(dbCollection)
        
        const newDBValues = update.password ? { $set: {
                            password: hashed,
                            email: update.email,
                            updatedAt: new Date
                        }} : { $set: {
                            email: update.email,
                            updatedAt: new Date
                        }}

        collection.updateOne({email}, newDBValues, (err, res) => {
            if(err) return err
            console.log('Update Success')
            client.close()
        })
    })
}

module.exports = updateUser


//----------------------------//
//  how to call this function //
//----------------------------//

// const email = "truman1234@antoinemcabee.dev"
// const dbCollection = "orgAccounts"
// const update = {
//     email: 'am@antoinemcabee.dev',
//     password: "testing122!"
// }

// const content = {
//     email,
//     dbCollection,
//     update
// }

// updateUser(content) //or
// updateUser({email, dbCollection, update})
