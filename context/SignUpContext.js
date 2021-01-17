
import {createContext, useState} from 'react'

export const SignUpContext = createContext({}, () => 1)

const SignUpProvider = ({children}) => {
  const [signUpData, setSignUpData] = useState({
    org: {
      name: '',
      field: '',
      email: '',
      password: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    },
    vol: {
      first: '',
      last: '',
      email: '',
      password: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: ''

    }
  })

  return (
    <SignUpContext.Provider value={[signUpData, setSignUpData]}>
      {children}
    </SignUpContext.Provider>
  )
}

export default SignUpProvider