import SignInLayout from '../../../components/layouts/SignInLayout'
import LoginField from '../../../components/LoginField'

export default function VolunteerSignInPage() {

    return (
        <SignInLayout activeTab={'Volunteer'} pageType={'signin'} header={'Welcome'}>
          <LoginField loginType={'vol'} />
        </SignInLayout>
    )
}