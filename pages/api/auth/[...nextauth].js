import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
require('dotenv').config()
 
const options = {

  site: process.env.NEXTAUTH_URL,

  providers: [
    Providers.Credentials({
      name: 'Credentials',
      authorize: async (credentials) => {
        
        const user = credentials
          // You need to provide your own logic here that takes the credentials
          // submitted and returns either a object representing a user or value
          // that is false/null if the credentials are invalid.
          // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        if (user) {
          // Any user object returned here will be saved in the JSON Web Token
          return Promise.resolve(user)
        } else {
          return Promise.resolve(null)
        }
      }
    })
  ],

  pages: {
    signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    //newUser: null // If set, new users will be directed here on first sign in
  },

  callbacks: {
    signIn: async (user, account, profile) => {
      //console.log(user)
      return Promise.resolve(user)
    },
    jwt: async (token, user, account, profile, isNewUser) => {
      //  "user" parameter is the object received from "authorize"
      //  "token" is being send below to "session" callback...
      //  ...so we set "user" param of "token" to object from "authorize"...
      //  ...and return it...
      user && (token.user = user);
      return Promise.resolve(token)   // ...here
    },
    session: async (session, user) => {
      session = user.user
      return Promise.resolve(session)
    }, 
  },

  session: {
    jwt: true
  }
}
 
export default (req, res) => NextAuth(req, res, options)