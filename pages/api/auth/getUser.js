/*
    function: getUser
    input:    user's email, password, db collection name
    return:   user [object] if user is found || null
*/

const bcrypt = require('bcrypt')
const MongoClient = require('mongodb').MongoClient;

require('dotenv').config() 

const getUser = async ({email, password, dbCollection}) => {

    const client = await MongoClient.connect('mongodb+srv://dbadmin:7pd6MzSD5tMf5EzX@cluster0.aqyod.mongodb.net/volunteer_site?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
        .catch(err => console.log(err))
    
    if(!client) {
        return
    }

    try {
        const collection = client.db("volunteer_site").collection(dbCollection);
        let query = { email: email, }
        let user = await collection.findOne(query);

        const validPassword = await bcrypt.compare(password, user.password);

        return  validPassword ? user : null

    } catch (err) {
        console.log(err);
    } finally {
        client.close()
    }
}

export default getUser

// async function testFunction() {
//     const user = await getUser({email: 'am@test.com', password: 'test123!', dbCollection: 'orgs' })
//     console.log(user)

// }

// testFunction()

