import styled from 'styled-components'
import {useContext} from 'react'
import {SignUpContext} from '../context/SignUpContext'
import OrgTrack from './OrgTrack'
import VolTrack from './VolTrack'

export default function SignUpTrack({loginType}) {

  const {signUpData, handleChange} = useContext(SignUpContext)

  return (
    <StyledForm autoComplete="off">
      {loginType === 'Organization' ?
        <OrgTrack state={signUpData.orgTrackState} data={signUpData.orgData} handleChange={handleChange}/> :
        <VolTrack state={signUpData.volTrackState} data={signUpData.volData} handleChange={handleChange}/> 
      }
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 2em;
  width: 75%;
`