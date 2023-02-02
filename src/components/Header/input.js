import styled from "styled-components"

const InputDiv = styled.div`
display: flex;
align-items:center;
`

const InputField = styled.input`
background: #052D56;
border-radius: 5px 0px 0px 5px;
width: 75%;
height: 70px;
border: none;
`

const InputButton = styled.button`
width: 25%;
height: 70px;
background: #FF4820;
border-radius: 0px 5px 5px 0px;
border: none;
font-size: 20px;
font-weight: 700;
color: white;
`

const Input = () => {
  return (
    <InputDiv>
    <InputField />
    <InputButton>Get Started</InputButton>
    </InputDiv>
  )
}

export default Input
