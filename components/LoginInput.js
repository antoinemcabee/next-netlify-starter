import styled from 'styled-components'

export function LoginInput(props) {
  return <StyledInput {...props}/>
}

const StyledInput = styled.input`
  width: 100%;
  background: none;
  color: white;
  border: none;
  border-radius: 2px;
  border-bottom: 1px solid #e1e1e1;
  margin-top: 3vh;
  padding: 5px 2px;
`