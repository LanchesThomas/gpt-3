import styled from 'styled-components'
import PossibilitiesPng from '../../assets/possibility.png'
import resolution from '../../utils/resolution/resolution'

const PossibilitiesDiv = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    gap: 50px;

    @media (max-width: ${resolution.large}) {
        flex-direction: column;
    }
`

const ImgDiv = styled.div`
    width: 50%;
    margin: auto;
    @media (max-width: ${resolution.large}) {
        width: 100%;
    }
`

const PossibilitiesImg = styled.img`
    width: 100%;
    height: 600px;
    object-fit: contain;

    @media (max-width: ${resolution.large}) {
        height: 400px;
    }
`

const ContentDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 10px;
    padding-bottom: 50px;
    @media (max-width: ${resolution.large}) {
        width: 100%;
    }
`

const Request = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #71e5ff;
`

const Title = styled.h2`
    font-size: 34px;
    font-weight: 800;
    background-image: linear-gradient(#ae67fa, #f49867);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Description = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #81afdd;
`

const Possibilities = () => {
    return (
        <PossibilitiesDiv>
            <ImgDiv>
                <PossibilitiesImg src={PossibilitiesPng} />
            </ImgDiv>
            <ContentDiv>
                <Request>Request Early Access to Get Started</Request>
                <Title>The possibilities are beyond your imagination</Title>
                <Description>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </Description>
                <Request>Request Early Access to Get Started</Request>
            </ContentDiv>
        </PossibilitiesDiv>
    )
}

export default Possibilities
