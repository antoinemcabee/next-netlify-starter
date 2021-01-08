import styled from 'styled-components'
import { StyledError } from '../components/StyledText'
import { Container } from '../components/StyledContainer'
import { ButtonPrimary } from '../components/StyledButtons'
import {LoginInput} from './LoginInput'
import {useState, useCallback} from 'react'
import { validateEmail, validatePassword } from '../utils/formValidation'

export default function LoginField({ csrfToken, loginType }) {

  const pswdError = "Password must be 7 to 15 characters and contain at least one numeric digit and a special character."
  
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const [emailError, setEmailError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)
  
  const handleChange = useCallback(({target}) => {
    if (target.name == 'email') validateEmail(target.value, {emailError, setEmailError})
    if (target.name == 'password') validatePassword(target.value, {passwordError, setPasswordError})
    
    let newCredentials = {...credentials}
    newCredentials[target.name] = target.value
    setCredentials(newCredentials)
  })
  
  return (
    <StyledContainer>
      <StyledHeader>Login</StyledHeader>
      <StyledForm method='post' action='/api/auth/callback/credentials' autoComplete="off">
        <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
        <input name='loginType' type='hidden' defaultValue={loginType}/>
      
        { emailError ? <Error>Invalid Email</Error> : null }
        { passwordError ? <Error>{pswdError}</Error> : null }

        <LoginInput err={emailError} type='text' name='email' placeholder='Email Address' value={credentials.email} onChange={handleChange}/>
        <LoginInput err={passwordError} type='password' name='password' placeholder='Password' value={credentials.password} onChange={handleChange}/>

      <StyledButton type='submit'>Continue</StyledButton>
      </StyledForm>
      <SignUp>{`Don't have and account? `}<SignUpButton href={'/signup'}>Sign Up</SignUpButton></SignUp>
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)`
  margin-top: 1rem;
`

const StyledHeader = styled.h1`
  font-size: 2rem;
  font-weight: 200;
  color: #e1e1e1;
  padding-top: 5vh;
  text-align: center;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 2em;
`

const StyledButton = styled(ButtonPrimary)`
  margin-top: 1.5rem;
  width: 100%;
`
const SignUp = styled.div`
  color: #d0d0d0;
  font-size: 12px;
  margin-top: 5vh;
  text-align: center;
`
const SignUpButton = styled.a`
  color: #d0d0d0;
  text-decoration: underline;
  cursor: pointer;
`
const Error = styled(StyledError)`
  margin-top: 1.5em;
`