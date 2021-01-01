/*
    function: getUser
    input:    user's email, password, db collection name
    return:   user [object] if user is found || null
*/

const bcrypt = require('bcrypt')
const MongoClient = require('mongodb').MongoClient;

require('dotenv').config() 

const getUser = ({email, password, dbCollection}) => {

    const client = new MongoClient('mongodb+srv://dbadmin:7pd6MzSD5tMf5EzX@cluster0.aqyod.mongodb.net/volunteer_site?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect( async (err) => {

        if(err) return err

        const collection = client.db("volunteer_site").collection(dbCollection)

        user = await collection.findOne({email: email})
            .catch(err => err)

        if(user == null) {
            console.log("Error: user not found")
            client.close()
            return null
        } else {
            try {
                if(await bcrypt.compare(password, user.password)) {
                    console.log(`Success. User Logged In:`, user)
                    client.close()
                    return user
                }
            } catch (err) {
                client.close()
                return err || null
            }
        }
    });
    
}

exports.getUser = getUser