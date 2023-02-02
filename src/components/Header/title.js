import styled from 'styled-components'

const TitleDiv = styled.div`
`

const TitleText = styled.h1`
    font-size: 62px;
    font-weight: 800;
    width: 100%;
    background-image: linear-gradient(#AE67FA, #F49867);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Title = () => {
    return (
        <TitleDiv>
            <TitleText>
                Let’s Build Something amazing with GPT-3 OpenAI
            </TitleText>
        </TitleDiv>
    )
}

export default Title
