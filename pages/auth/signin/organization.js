import SignInProvider from 'context/SignInContext'
import SignInLayout from '../../../components/layouts/SignInLayout'
import LoginField from '../../../components/LoginField'

export default function OrganizationSignInPage() {

    return (
        <SignInLayout activeTab={'Organization'} pageType={'signin'} header={'Welcome'}>
          <LoginField loginType={'org'}/>
        </SignInLayout>
    )
}