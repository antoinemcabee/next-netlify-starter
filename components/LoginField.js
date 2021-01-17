import styled from 'styled-components'
import { StyledError } from '../components/StyledText'
import { Container } from '../components/StyledContainer'
import { ButtonPrimary } from '../components/StyledButtons'
import LoginInput from './LoginInput'
import SignInLoading from './SignInLoading'
import {useState, useCallback, useEffect, useContext} from 'react'
import {SignInContext} from '../context/SignInContext'
import {useRouter} from 'next/router'
import { getCsrfToken} from 'next-auth/client'

export default function LoginField({ loginType }) {

  const [signInData, setSignInData] = useContext(SignInContext)
  const data = signInData[loginType]
  const {error} = useRouter().query
  const [err, setErr] = useState()
  const [csrfToken, setCsrfToken] = useState()

  useEffect(() => {
      (async () => {
          const csrfToken = await getCsrfToken()
          setCsrfToken(csrfToken)
      })()
      if(error) setErr(true)
  }, [error])

  const handleChange = useCallback(({target}) => {
    const newData = {...data, [target.name]: target.value}
    setSignInData(signInData => ({
      ...signInData, [loginType]: newData }))
  })

  const handleFocus = useCallback(e => {
    setErr(false)
  })

  const handleSubmit = useCallback(e => {
    if(err) e.preventDefault()
    if(!data.email || !data.password){
      e.preventDefault()
      setErr(true)
    }
  })

  return (
    <StyledContainer>
      <StyledHeader>Login</StyledHeader>
      <StyledForm method='post' action='/api/auth/callback/credentials' autoComplete="off" onSubmit={handleSubmit}>
        {csrfToken && <input name='csrfToken' type='hidden' value={csrfToken}/>}
        <input name='loginType' type='hidden' defaultValue={loginType}/>

        <LoginInput err={err} type='text' name='email' placeholder='Email Address' value={data.email} onChange={handleChange} onFocus={handleFocus}/>
        <LoginInput err={err} type='password' name='password' placeholder='Password' value={data.password} onChange={handleChange} onFocus={handleFocus}/>
        {err && 
          <>
            <Error>Login Error</Error>
            <Error>Please enter a valid email and password.</Error>
          </>
        }

        <StyledButton type='submit'>Continue</StyledButton>
      </StyledForm>
      <SignUp>{`Don't have and account? `}<SignUpButton href={'/signup/organization'}>Sign Up</SignUpButton></SignUp>
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)`
  margin-top: 2vh;
`

const StyledHeader = styled.h1`
  font-size: 2rem;
  font-weight: 200;
  color: #e1e1e1;
  padding-top: 3vh;
  text-align: center;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1vh 2em;
`

const StyledButton = styled(ButtonPrimary)`
  margin-top: 6vh;
  width: 100%;
`
const SignUp = styled.div`
  color: #d0d0d0;
  font-size: 12px;
  margin-top: 3vh;
  text-align: center;
`
const SignUpButton = styled.a`
  text-decoration: underline;
  cursor: pointer;
`
const Error = styled(StyledError)`
  margin-top: 2vh;
`