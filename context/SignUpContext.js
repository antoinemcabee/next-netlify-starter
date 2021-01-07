
import {useState, useCallback, createContext} from 'react'

export const SignUpContext = createContext()

const SignUpProvider = ({ children }) => {

    const [signUpData, setSignUpData] = useState({
      orgTrackState: 0,
      orgData: {
        name: '',
        industry: '',
        phone: '',
        email: '',
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
        <SignUpContext.Provider value={{signUpData, handleChange}}>
            {children}
        </SignUpContext.Provider>
    )
}

export default SignUpProvider
