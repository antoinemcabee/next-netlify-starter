import styled from 'styled-components'
import {useState, useCallback} from 'react'



export default function LoginField({ csrfToken, loginType }) {
  
  const [credentials, setCredentials] = useState({})

  const handleChange = useCallback(({target}) => {
    let newCredentials = {...credentials}
    newCredentials[target.name] = target.value
    setCredentials(newCredentials)
  })

  return (
    <>
      <StyledHeader>Login</StyledHeader>
      <StyledForm method='post' action='/api/auth/callback/credentials' autoComplete="off">
        <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
        <input name='loginType' type='hidden' defaultValue={loginType}/>
      
        <StyledInput type='text' name='email' placeholder='Email Address' value={credentials.email} onChange={handleChange}/>
        <StyledInput type='password' name='password' placeholder='Password' value={credentials.password} onChange={handleChange}/>
        <StyledButton type='submit'>Continue</StyledButton>
      </StyledForm>
      <SignUp>{`Don't have and account? `}<SignUpButton href={'/signup'}>Sign Up</SignUpButton></SignUp>
    </>
  )
}

const StyledHeader = styled.h1`
  font-size: 2rem;
  font-weight: 200;
  color: #e1e1e1;
  padding-top: 5vh;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 2em;
  width: 75%;
`

const StyledInput = styled.input`
  width: 100%;
  background: none;
  color: white;
  border: none;
  border-bottom: 1px solid #e1e1e1;
  margin-top: 3vh;
  padding: 5px 0;
`

const StyledButton = styled.button`
  background: none;
  border: 1px solid white;
  border-radius: 5px;
  padding: 1em 3em;
  margin-top: 5vh;
  color: #e1e1e1;
  font-weight: 600;
  text-align: center;
`
const SignUp = styled.div`
  color: #d0d0d0;
  font-size: 12px;
  margin-top: 5vh;
`
const SignUpButton = styled.a`
  color: #d0d0d0;
  text-decoration: underline;
  cursor: pointer;
`