import styled from 'styled-components'
import openAiData from '../../datas/openAiData.json'
import resolution from '../../utils/resolution/resolution'

const OpenAiDiv = styled.div`
    width: 80%;
    margin: 100px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0px;
    position: relative;

    #item-0 {
        grid-column-start: 2;
        grid-column-end: 4;
    }

    @media (max-width: ${resolution.large}) {
        display: flex;
        flex-direction: column;
        gap: 60px;
    }
`

const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    @media (max-width: ${resolution.large}) {
        gap: 15px;
    }
`

const Title = styled.h2`
    font-size: 34px;
    font-weight: 800;
    background-image: linear-gradient(#ae67fa, #f49867);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Request = styled.p`
    color: #ff8a71;
    font-size: 16px;
    font-weight: 500;
`

const SubContentDiv = styled.div`
    display: flex;

    @media (max-width: ${resolution.large}) {
        gap: 30px;
    }
`

const SubTitleDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    @media (max-width: ${resolution.large}) {
        align-items: flex-start;
        justify-content: space-around;
    }
`

const SubTitle = styled.p`
    width: 45%;
    color: white;
    font-size: 18px;
    font-weight: 800;
    margin: 0px;
    padding-top: -10px;

    &:before {
        display: block;
        content: '';
        margin-bottom: 10px;
        width: 38px;
        height: 3px;
        background: linear-gradient(#ae67fa, #f49867);
    }

    @media (max-width: ${resolution.large}) {
        width: 100%;
    }
`

const ContentDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: space-between;
    align-items: center;

`

const Content = styled.p`
    width: 75%;
    color: #81afdd;
    font-size: 14px;
    font-weight: 500;
    margin: 0px 5px;
    @media (max-width: ${resolution.large}) {
        width: 100%;
    }
`

const Filter = styled.div`
    position: absolute;
    border-radius: 50%;
    width: 581px;
    height: 410px;
    z-index: -1;
    background: #0f4279;
    filter: blur(200px);
    top: 0px;
    left: -600px;
`

const OpenAi = () => {
    return (
        <OpenAiDiv id="open-ai">
            <Filter />
            <TitleDiv>
                <Title>
                    The Future is Now and You Just Need To Realize It. Step into
                    Future Today & Make it Happen.
                </Title>
                <Request>Request Early Access to Get Started</Request>
            </TitleDiv>
            <SubContentDiv id="item-0">
                <SubTitleDiv>
                    {openAiData.map((data) => (
                        <SubTitle key={data.title}>{data.title}</SubTitle>
                    ))}
                </SubTitleDiv>
                <ContentDiv>
                    {openAiData.map((data) => (
                        <Content key={`${data.title}-content`}>{data.content}</Content>
                    ))}
                </ContentDiv>
            </SubContentDiv>
        </OpenAiDiv>
    )
}

export default OpenAi
