import { useEffect } from 'react'
import { client } from '../clients'
import { ApolloProvider } from "@apollo/react-hooks";
import { signIn, signOut, useSession } from 'next-auth/client'
import "reflect-metadata";

const App = ({ data }) => {

  const [session, loading] = useSession()
  
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <ApolloProvider client={client}>
        <div>
          {!session && (
            <>
              Not signed in <br />
              <button onClick={() => signIn(null, {callbackUrl: 'http://localhost:3000/org-dashboard'})}>Sign In</button>
            </>
          )}

          {
            session && (
              <>
                Signed in as {session.email} <br />
                <div>You can now access our super secret pages</div>
                <button onClick={signOut}>Sign Out</button>
              </>
            )
          }
        </div>
    </ApolloProvider>
  );
};

export default App;