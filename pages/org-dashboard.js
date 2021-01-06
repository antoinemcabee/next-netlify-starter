import { useSession, getSession } from 'next-auth/client'

export default function OrgDashboard() {
  const [ session, loading ] = useSession()

  if (typeof window !== 'undefined' && loading) return null

  if (!session) return <p>Access Denied</p>

  console.log(session)

  return (
    <>
      <h1>Protected Page</h1>
      <p>You can view this page because you are signed in.</p>
      <p>email: {session.user.email}</p>
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  return {
    props: { session }
  }
}