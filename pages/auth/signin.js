import { useEffect, useState } from 'react'
import LoginField from '../../components/LoginField'
import SignInLayout from '../../components/layouts/SignInLayout'
import SignInLoading from '../../components/SignInLoading'
import { getCsrfToken } from 'next-auth/client'

export default function SignInPage() {

    const [csrfToken, setCsrfToken] = useState(null)
    useEffect(() => {
        (async () => {
            const csrfToken = await getCsrfToken()
            setCsrfToken(csrfToken)
        })()
    }, [])

    if (!csrfToken) return <SignInLoading/>

    return (
        <SignInLayout header={'Welcome'}>
            <LoginField csrfToken={csrfToken} />
        </SignInLayout>             
    )
}