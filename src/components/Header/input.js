import styled from 'styled-components'
import colors from '../../datas/colors'
import resolution from '../../utils/resolution/resolution'

const InputDiv = styled.div`
    display: flex;
    align-items: center;
`

const InputField = styled.input`
    background: #052d56;
    border-radius: 5px 0px 0px 5px;
    width: 75%;
    height: 70px;
    border: none;
    font-size: 20px;
    font-weight: 400;
    color: #3d6184;
    padding: 20px;
    @media (max-width: ${resolution.medium}) {
        height: 35px;
        font-size: 12px;
        padding: 10px;
    }
`

const InputButton = styled.button`
    width: 25%;
    height: 70px;
    background: ${colors.button};
    border-radius: 0px 5px 5px 0px;
    border: none;
    font-size: 20px;
    font-weight: 700;
    color: white;
    cursor: pointer;
    transition: color 200ms ease-in-out;
    @media (max-width: ${resolution.medium}) {
        height: 35px;
        font-size: 12px;
    }
    &:hover {
        background: white;
        color:${colors.button}
    }
`

const Input = () => {
    return (
        <InputDiv>
            <InputField placeholder="Your Email Adress" />
            <InputButton>Get Started</InputButton>
        </InputDiv>
    )
}

export default Input
