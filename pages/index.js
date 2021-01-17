import { useSession } from 'next-auth/client'
import {useRouter} from 'next/router'
import "reflect-metadata";

const App = ({ data }) => {

  const router = useRouter()
  const [session, loading] = useSession()

  if (loading) {
    return <p>Loading...</p>
  }
  if (session) router.push('/org-dashboard')
  else router.push('/auth/signin/organization')
  
  return(
    <></>
  )

};

export default App;