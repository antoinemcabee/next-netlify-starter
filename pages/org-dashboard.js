import { useSession, getSession, signOut } from 'next-auth/client'
import styled from 'styled-components'
import { ContentHeader, TextDescription } from '../components/StyledText'
import { Container } from '../components/StyledContainer'
import UpcomingEvents from '../components/UpcomingEvents'
import DashboardCards from '../components/DashboardCards'

export default function OrgDashboard() {
  const [ session, loading ] = useSession()

  if (typeof window !== 'undefined' && loading) return null

  if (!session) return <p>Access Denied</p>

  const events = [
    {
      name: "event 1",
      volunteerCount: 5
    },
    {
      name: "event 2",
      volunteerCount: 12
    },
    {
      name: "event 3",
      volunteerCount: 0
    },
    {
      name: "event 4",
      volunteerCount: 99
    }
  ]

  const content = [
    {
      title: "Create Events",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "Comments",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "Volunteers",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "Settings",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
  ]

  return (
    <BG>
      <Container>
        <Header>
          <TextHeader>Welcome, {session.user.name}</TextHeader>
          <Description>Dashboard - Organization Console</Description>
          <ProfileImage src='https://volunteer-site-webapp.s3.us-east-2.amazonaws.com/Fall_Patty.jpg'/>
        </Header>
        <UpcomingEvents title='Upcoming Events' items={events} />

        <CardContainer>
          { content.map(item => (
            <DashboardCards key={item.title} content={item} />
          )) }
        </CardContainer>
        <button onClick={() => signOut({callbackUrl: 'http://localhost:3000/auth/signin'})}>signout</button>
      </Container>
    </BG>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  return {
    props: { session }
  }
}

const BG = styled.div`
  background: #ededed;
  height: 30vh;
`

const Header = styled.div`
  position: relative;
  top: 15%;
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: 80%;
  row-gap: 2px;
  text-align: left;

`

const CardContainer = styled.div`
  margin-top: 7rem;
`

const TextHeader = styled(ContentHeader)`
  grid-row-start: 1;
  align-self: end;
`

const Description = styled(TextDescription)`
  grid-row-start: 2;
`

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 65px;
  height: 65px;
  grid-column-start: 2;
`