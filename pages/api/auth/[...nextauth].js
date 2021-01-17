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
        try {
          const {email, password} = credentials
          const user =  await getUser({email, password, dbCollection: "orgs"}) 
          
          if(user === null) throw new Error
          
          return Promise.resolve(user)

        } catch {
          return Promise.resolve(false)
        }
      }
    })
  ],

  pages: {
    signIn: '/auth/signin/organization',
    // signOut: '/auth/signout',
    error: '/auth/signin/organization', // Error code passed in query string as ?error=
    //newUser: null // If set, new users will be directed here on first sign in
  },

  callbacks: {
    jwt: async (token, user, account, profile, isNewUser) => {
    
    },
    session: async (session, user) => {
  
    }, 
  },

  session: {
    jwt: true
  }
}
 
export default (req, res) => NextAuth(req, res, options)