import {useCallback} from 'react'
import {LoginInput} from './LoginInput'
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
            <LoginInput type='text' name='name' placeholder='Organization Name' value={data.name} onChange={handleOrgChange}/>
            <LoginInput type='text' name='industry' placeholder='Organization Industry' value={data.industry} onChange={handleOrgChange}/>
            <LoginInput type='text' name='phone' placeholder='Organzation Phone' value={data.phone} onChange={handleOrgChange}/>
            <LoginInput type='text' name='email' placeholder='Organization Email' value={data.email} onChange={handleOrgChange}/>
          </>
        )
      case 1: 
        return (
          <>
            <LoginInput type='text' name='address' placeholder='1 Address' value={data.address} onChange={handleOrgChange}/>
            <LoginInput type='text' name='other' placeholder='City, State, Zip' value={data.other} onChange={handleOrgChange}/>
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
