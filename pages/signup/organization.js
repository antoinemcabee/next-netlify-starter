import SignInLayout from '../../components/layouts/SignInLayout'
import LoginInput from '../../components/LoginInput'
import {Container} from '../../components/StyledContainer'
import {SignUpContext} from '../../context/SignUpContext'
import {useContext, useCallback} from 'react'
import styled from 'styled-components'

export default function OrganizationSignUpPage() {

  const [signUpData, setSignUpData] = useContext(SignUpContext)
  const data = signUpData.org

  const handleChange = useCallback(({target}) => {
    const newData = {...data, [target.name]: target.value}
    setSignUpData(signUpData => ({
      ...signUpData, org: newData }))
  })

    return (
        <SignInLayout activeTab={'Organization'} pageType={'signup'} header={'Sign Up'}>
          <Container>
            <StyledForm autoComplete={'off'}>
              <LoginInput err={false} type='text' name='name' placeholder='Organization Name'  value={data.name}  onChange={handleChange} errMsg={''}/>
              <LoginInput err={false} type='text' name='field' placeholder='Volunteer Field' value={data.field}  onChange={handleChange} errMsg={''}/>
              <LoginInput err={false} type='text' name='email' placeholder='Email'value={data.email}  onChange={handleChange} errMsg={''} />
              <LoginInput err={false} type='password' name='password' placeholder='Password' value={data.password}  onChange={handleChange} errMsg={''}/>
              <LoginInput err={false} type='password' name='password-confirm' placeholder='Confirm Password' errMsg={''}/>
              <LoginInput err={false} type='text' name='phone' placeholder='Primary Phone' value={data.phone}  onChange={handleChange} errMsg={''}/>
              <LoginInput err={false} type='text' name='address' placeholder='Address' value={data.address}  onChange={handleChange} errMsg={''}/>
              <LoginInput err={false} type='text' name='city' placeholder='City' value={data.city}  onChange={handleChange} errMsg={''}/>
              <LoginInput err={false} type='text' name='zip' placeholder='Zip Code' value={data.zip}  onChange={handleChange} errMsg={''}/>
            </StyledForm>
          </Container>
        
        </SignInLayout>
    )
}

const StyledForm = styled.form`
  padding: 1vh 2em;
  autocomplet
`