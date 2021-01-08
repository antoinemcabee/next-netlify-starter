import styled from 'styled-components'

export default function SignInLoading() {
  return (
    <LoadBackground>Loading</LoadBackground>
  )
}

const LoadBackground = styled.div`
  background-color: #222831;
  height: 100vh;
`