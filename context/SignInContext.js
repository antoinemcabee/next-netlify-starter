
import {createContext, useState} from 'react'

export const SignInContext = createContext({}, () => 1)

const SignInProvider = ({children}) => {
  const [signInData, setSignInData] = useState({
    org: {
      email: '',
      password: ''
    },
    vol: {
      email: '',
      password: ''
    }
  })

  return (
    <SignInContext.Provider value={[signInData, setSignInData]}>
      {children}
    </SignInContext.Provider>
  )
}

export default SignInProvider