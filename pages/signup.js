import SignInLayout from '../components/layouts/SignInLayout'
import SignUpTrack from '../components/SignUpTrack'
import SignUpProvider from '../context/SignUpContext'

export default function SignUpPage() {
    return (
      <SignUpProvider>
        <SignInLayout header={'Sign Up'}>
          <SignUpTrack />
        </SignInLayout>
      </SignUpProvider>             
    )
}