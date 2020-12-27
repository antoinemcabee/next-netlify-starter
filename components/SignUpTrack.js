import styled from 'styled-components'
import {useState, useCallback} from 'react'
import OrgTrack from '../components/OrgTrack'
import VolTrack from '../components/VolTrack'



export default function SignUpTrack({ loginType }) {
  
  const [signUpData, setSignUpData] = useState({
    orgTrackState: 0,
    orgData: {},

    volTrackState: 0,
    volData: {}
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
        {loginType == 'Organization' ?
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