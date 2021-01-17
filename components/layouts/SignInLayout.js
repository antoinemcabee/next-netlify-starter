import styled from 'styled-components'
import { StyledHeader } from '../../components/StyledText'
import SignInTabs from '../../components/SignInTabs'

export default function SignInLayout({activeTab, pageType, header, children}) {

  

  return (
    <Container>
        <PageHeader>{header}</PageHeader>
            <SignInTabs activeTab={activeTab} pageType={pageType}/>
            {children}
        <Copyright>{`© 2021 VolunteerSite.com`}</Copyright>
    </Container>
  )

}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222831;
  height: 100%;
  min-height: 100vh;
`
const PageHeader = styled(StyledHeader)`
  padding-top: 10vh;
  padding-bottom: 5vh;
`   
const Copyright = styled.p`
  
  margin: 3vh;
  font-size: 10px;
  color: #d0d0d0;
`