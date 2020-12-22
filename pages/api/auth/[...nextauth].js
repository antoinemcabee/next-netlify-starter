import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import sendVerificationRequest from '../../../utils/mailer'
require('dotenv').config()
 
const options = {

  site: process.env.NEXTAUTH_URL,

  providers: [
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM,
        sendVerificationRequest: ({ identifier: email, url, token, site, provider }) => { sendVerificationRequest( {identifier: email, url, token, site, provider}) }
  
    }),
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN,
    }),
  ],

  pages: {
    // signIn: '/auth/email-signin',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: null // If set, new users will be directed here on first sign in
  },

  callbacks: {
     /**
   * @param  {object} user     User object
   * @param  {object} account  Provider account
   * @param  {object} profile  Provider profile 
   * @return {boolean}         Return `true` (or a modified JWT) to allow sign in
   *                           Return `false` to deny access
   */
  signIn: async (user, account, profile) => {
    const isAllowedToSignIn = true
    if (isAllowedToSignIn) {
      return Promise.resolve('/testPage')
    } else {
      // Return false to display a default error message
      return Promise.resolve('/testPage')
      // You can also Reject this callback with an Error or with a URL:
      // return Promise.reject(new Error('error message')) // Redirect to error page
      // return Promise.reject('/path/to/redirect')        // Redirect to a URL
    }
  },
  },
  //   /**
  //    * @param  {string} url      URL provided as callback URL by the client
  //    * @param  {string} baseUrl  Default base URL of site (can be used as fallback)
  //    * @return {string}          URL the client will be redirect to
  //    */
  //   redirect: async (url, baseUrl) => {
  //     return url.startsWith(baseUrl)
  //       ? Promise.resolve(url)
  //       : Promise.resolve(baseUrl)
  //   }
  // },

  database: {
    type: "mongodb",
    useNewUrlParser: true,
    url: process.env.DATABASE_URL,
    ssl: true,
    useUnifiedTopology: true,
    authSource: "admin",
  },
}
 
export default (req, res) => NextAuth(req, res, options)