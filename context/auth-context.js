
import {useState, createContext, useContext} from 'react'

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [loginType, setLoginType] = useState(null)

    return (
        <AuthContext.Provider value={{loginType, setLoginType}}>
            {children}
        </AuthContext.Provider>
    )
}
