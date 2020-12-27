import {useCallback} from 'react'
import styled from 'styled-components'

export default function VolTrack({ state, data, handleChange }) {

  const handleVolChange = useCallback((e) => {
    handleChange(e, 'vol')
  })

  const renderSwitch = (state) => {
    switch(state) {
      case 0:
        return (
          <>
            <StyledInput type='text' name='fisrt' placeholder='First Name' value={data.name} onChange={handleVolChange}/>
            <StyledInput type='text' name='last' placeholder='Last Name' value={data.industry} onChange={handleVolChange}/>
            <StyledInput type='text' name='email' placeholder='Organization Email' value={data.email} onChange={handleVolChange}/>
            <StyledInput type='text' name='phone' placeholder='Organzation Phone' value={data.phone} onChange={handleVolChange}/>
          </>
        )
      case 1: 
        return (
          <>
            <StyledInput type='text' name='address' placeholder='1 Address' value={data.address} onChange={handleVolChange}/>
            <StyledInput type='text' name='other' placeholder='City, State, Zip' value={data.other} onChange={handleVolChange}/>
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