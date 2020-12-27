import {useCallback} from 'react'
import styled from 'styled-components'

export default function OrgTrack({ state, data, handleChange }) {

  const handleOrgChange = useCallback((e) => {
    handleChange(e, 'org')
  })

  const renderSwitch = (state) => {
    switch(state) {
      case 0:
        return (
          <>
            <StyledInput type='text' name='name' placeholder='Organization Name' value={data.name} onChange={handleOrgChange}/>
            <StyledInput type='text' name='industry' placeholder='Organization Industry' value={data.industry} onChange={handleOrgChange}/>
            <StyledInput type='text' name='phone' placeholder='Organzation Phone' value={data.phone} onChange={handleOrgChange}/>
            <StyledInput type='text' name='email' placeholder='Organization Email' value={data.email} onChange={handleOrgChange}/>
          </>
        )
      case 1: 
        return (
          <>
            <StyledInput type='text' name='address' placeholder='1 Address' value={data.address} onChange={handleOrgChange}/>
            <StyledInput type='text' name='other' placeholder='City, State, Zip' value={data.other} onChange={handleOrgChange}/>
          </>
        )
    }
  }

  return (
    <>
      {renderSwitch(state)}
    </>
  )
}

const StyledInput = styled.input`
  width: 100%;
  background: none;
  color: white;
  border: none;
  border-bottom: 1px solid #e1e1e1;
  margin-top: 3vh;
  padding: 5px 0;
`