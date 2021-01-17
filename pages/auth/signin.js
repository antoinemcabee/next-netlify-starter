import {useRouter} from 'next/router'

export default function SignIn(){

  if(process.browser) useRouter().push('/')
  
  return (
    <></>
  )

};