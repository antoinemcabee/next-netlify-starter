import styled from 'styled-components'
import {StyledError} from './/StyledText'

export default function LoginInput(props) {
  return (
    <Container>
      <StyledInput maxLength={30} {...props}/>
      <ErrMsg>{props.errMsg}</ErrMsg>
    </Container>
  )
}

const Container = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
`
const StyledInput = styled.input`
  width: 100%;
  background: none;
  color: white;
  border: none;
  border-radius: 2px;
  border-bottom: 1px solid #e1e1e1;
  margin-top: 4vh;
  padding: 5px 2px;
  outline: none;
  border-color: ${props => props.err ? "#E24D4D" : ""};
`
const ErrMsg = styled(StyledError)`
  margin-top: 2vh;
  margin-left: 0.5em;
  align-self: start;
`