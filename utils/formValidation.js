export function validateEmail(email, emailState)  {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if(re.test(String(email).toLowerCase())){
        emailState.setEmailError(false)
      } else {
        emailState.setEmailError(true)
      }
}

export function validatePassword(password, passwordState) {
  const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
    if(re.test(String(password))){
      passwordState.setPasswordError(false)
    } else {
      passwordState.setPasswordError(true)
    }
}
