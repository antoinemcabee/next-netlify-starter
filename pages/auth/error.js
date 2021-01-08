import { useRouter } from "next/router";
import styled from 'styled-components'
import { StyledHeader, StyledError } from '../../components/StyledText'
import { ButtonPrimary } from '../../components/StyledButtons'
import Link from 'next/link'

const displayError = (error) => {
    switch(error){
        case "AccessDenied":
            return "User Already Exists or Invalid Password"
        case "TypeError: Cannot read property 'password' of undefined":
            return "Please enter a correct username or password and try again, or create an account."
        default:
            error
    }
}

const Errors = () => {
    const { query: { error } } = useRouter();
    return(
        <Container>
            <PageHeader>Login Error </PageHeader>
            <LoginError>{displayError(error)}</LoginError>
            <Link href='/auth/signin'><StyledButton>Sign In</StyledButton></Link>
            <Link href='/signup'><StyledButton>Create Account</StyledButton></Link>

        </Container>
    )
}

export default Errors

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #222831;
  height: 100vh;
`

const PageHeader = styled(StyledHeader)`
    /* position: absolute;
    top: 15%; */
`

const LoginError = styled(StyledError)`
    margin: 2rem;
    width: 80%;
`

const StyledButton = styled(ButtonPrimary)`
    margin: 1rem;
`