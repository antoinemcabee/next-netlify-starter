import {useCallback} from 'react'
import {LoginInput} from './LoginInput'
import styled from 'styled-components'

export default function VolTrack({state, data, handleChange }) {

  const handleVolChange = useCallback((e) => {
    handleChange(e, 'vol')
  })

  const trackSlides = [
    <>
      <LoginInput type='text' name='first' placeholder='First Name' value={data.first} onChange={handleVolChange}/>
      <LoginInput type='text' name='last' placeholder='Last Name' value={data.last} onChange={handleVolChange}/>
      <LoginInput type='text' name='email' placeholder='Organization Email' value={data.email} onChange={handleVolChange}/>
      <LoginInput type='text' name='phone' placeholder='Organzation Phone' value={data.phone} onChange={handleVolChange}/>
    </>,
    <>
      <LoginInput type='text' name='address' placeholder='1 Address' value={data.address} onChange={handleVolChange}/>
      <LoginInput type='text' name='other' placeholder='City, State, Zip' value={data.other} onChange={handleVolChange}/>
    </>
  ]
  return (
    trackSlides[state]
  )
}
