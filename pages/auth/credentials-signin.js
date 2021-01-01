import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Tabs from '../../components/Tabs'
import SignIn from '../../components/Org_Login'
import { getCsrfToken } from 'next-auth/client'

export default function SignInPage() {

    const [token, setToken] = useState(null)

    useEffect( () => {
         async () =>  {
              const csrfToken = await getCsrfToken()
              setToken(csrfToken)
         }
    }, [])

    const tabs = [
        {
            title: "Organization",
            subhead: "Login",
            content: <SignIn csrfToken={token} />,
        },
        {
            title: "Volunteer",
            subhead: "Login",
            content: "Ad mollit in exercitation sunt quis consequat velit ullamco irure excepteur. Aute incididunt id labore fugiat culpa laboris eiusmod laborum. Qui commodo ullamco reprehenderit elit non ullamco consequat ullamco ex. Cillum et occaecat laborum incididunt cupidatat occaecat et cillum. Id ipsum culpa qui nisi veniam ullamco voluptate laborum laboris id sunt.",
        },
    ]

    return (
        <BG>
            <Container>
                <SytledHeader>Welcome</SytledHeader>
                <LoginContainer>
                    <Tabs tabs={tabs} />
                </LoginContainer>
            </Container>
        </BG>
    )

}

const BG = styled.div`
    background-color: #222831;
    width: 100%;
    height: 100vh;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SytledHeader = styled.h1`
    position: absolute;
    font-size: 2rem;
    font-weight: 200;
    color: #e1e1e1;
    top: 25%;
`
const LoginContainer = styled.div`
    position: absolute;
    width: 100%;
    top: 40%;
`