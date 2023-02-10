import styled from 'styled-components'
import resolution from '../../utils/resolution/resolution'

const RegisterDiv = styled.div`
    width: 80%;
    background-image: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
    display: flex;
    padding: 50px 30px;
    border-radius: 10px;
    margin: 100px auto;

@media (max-width: ${resolution.large}) {
    flex-direction: column;
    gap: 50px;
    padding: 25px 15px;
    margin: 50px auto;
}
`

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;

    @media (max-width: ${resolution.large}) {
        align-items: center;
        flex-direction: column-reverse;
    }
`

const Request = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: #0e0e0e;
    margin: 0;
`

const Title = styled.h3`
    font-size: 24px;
    font-weight: 800;
    color: black;
    margin: 0;

    @media (max-width: ${resolution.large}) {
        text-align: center;
    }
`

const ButtonDiv = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    border: none;
    background-color: black;
    color: white;
    border-radius: 40px;
    font-size: 18px;
    padding: 20px 50px;
    font-weight: 700;
    cursor: pointer;
    transition: color 300ms ease-in;

    &:hover {
        background-color: white;
        color: black;
    }
`

const Register = () => {
    return (
        <RegisterDiv>
            <ContentDiv>
                <Request>Request Early Access to Get Started</Request>
                <Title>
                    Register today & start exploring the endless possiblities.
                </Title>
            </ContentDiv>
            <ButtonDiv>
                <Button>Get Started</Button>
            </ButtonDiv>
        </RegisterDiv>
    )
}

export default Register
