import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import getUser from './getUser'
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
      const dbUser =  await getUser({email: user.email, password: user.password, dbCollection: "orgAccounts"})
      let isAllowedToSignIn = null

      if(dbUser) isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return Promise.resolve(true)
      } else {
        // Return false to display a default error message
        return Promise.reject(false)
        // You can also Reject this callback with an Error or with a URL:
        // return Promise.reject(new Error('error message')) // Redirect to error page
        // return Promise.reject('/path/to/redirect')        // Redirect to a URL
      }
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
      const dbUser =  await getUser({email: user.email, password: user.password, dbCollection: "orgAccounts"})
      if(dbUser) {
        user.user.password = dbUser.password
        delete user.email
      }

      session = user
      return Promise.resolve(session)
    }, 
  },

  session: {
    jwt: true
  }
}
 
export default (req, res) => NextAuth(req, res, options)