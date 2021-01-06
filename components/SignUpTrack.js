import styled from 'styled-components'
import {useState, useCallback} from 'react'
import OrgTrack from './OrgTrack'
import VolTrack from './VolTrack'
import { useSession, getSession } from 'next-auth/client'


export default function SignUpTrack() {

  const [ session, loading ] = useSession()

  if (typeof window !== 'undefined' && loading) return null

  
  
  const [signUpData, setSignUpData] = useState({
    orgTrackState: 0,
    orgData: {
      name: '',
      industry: '',
      phone: '',
      emial: '',
      address: '',
      other: ''
    },

    volTrackState: 0,
    volData: {
      first: '',
      last: '',
      email: '',
      phone: '',
      address: '',
      other:''
    }
  })

  const handleChange = useCallback(({target}, signUpType) => {
    let newSignUpData = {...signUpData}

    if(signUpType === 'org')  
      newSignUpData.orgData[target.name] = target.value 
    if(signUpType === 'vol')
      newSignUpData.volData[target.name] = target.value
    setSignUpData(newSignUpData)
  })

  return (
    <>
      <StyledForm autoComplete="off">
        {session.loginType == 'Organization' ?
          <OrgTrack state={signUpData.orgTrackState} data={signUpData.orgData} handleChange={handleChange}/> :
          <VolTrack state={signUpData.volTrackState} data={signUpData.volData} handleChange={handleChange}/> 
        }
      </StyledForm>
    </>
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