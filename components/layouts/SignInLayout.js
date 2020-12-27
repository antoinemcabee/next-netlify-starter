import { useState } from 'react'
import styled from 'styled-components'
import Tabs from '../../components/Tabs'
import childrenWithProps from '../../utils/childrenWithProps'

export default function SignInLayout({children, header}) {

  const tabTitles = ['Organization', 'Volunteer']
  const [activeTab, setActiveTab] = useState(0)
  const tabData = [tabTitles, activeTab, setActiveTab]

  return (
    <Container>
        <StyledHeader>{header}</StyledHeader>
            <Tabs tabData={tabData} />
            {childrenWithProps(children, {loginType: tabTitles[activeTab]})}
        <Copyright>{`© 2021 VolunteerSite.com`}</Copyright>
    </Container>
  )

}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222831;
  height: 100vh;
`
const StyledHeader = styled.h1`
  font-size: 2rem;
  font-weight: 200;
  color: #e1e1e1;
  padding-top: 15vh;
  padding-bottom: 5vh;
`   
const Copyright = styled.p`
  position: absolute;
  bottom: 2vh;
  font-size: 10px;
  color: #d0d0d0;
`