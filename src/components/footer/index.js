import styled from 'styled-components'
import footerData from '../../datas/footerData.json'
import resolution from '../../utils/resolution/resolution'

const FooterDiv = styled.footer`
    width: 100%;
    height: 950px;
    background-color: #031b34;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`

const RequestDiv = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h2`
    font-size: 62px;
    font-weight: 800;
    width: 70%;
    text-align: center;
    background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: ${resolution.large}) {
    font-size: 30px;
    }
`

const Button = styled.button`
    color: white;
    background-color: inherit;
    padding: 20px;
    border: 1px solid white;
    font-size: 18px;
    cursor: pointer;
`

const FooterLink = styled.div`
    height: 50%;
    display: flex;
    width: 100%;

    @media (max-width: ${resolution.large}) {
        flex-direction: column;
        align-items: center;
        gap: 50px;
    }
`

const LogoDiv = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: ${resolution.large}) {
    width: 100%;
    
    }
`

const Logo = styled.h3`
    display: flex;
    font-size: 62px;
    margin: 0;
    font-weight: 800;
`

const Right = styled.p`
    font-size: 12px;
`

const ContentDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 50%;

    @media (max-width: ${resolution.large}) {
        width: 100%;
    }

`

const LinkDiv = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (max-width: ${resolution.large}) {
        margin:0px auto;
    }
`

const LinkTitle = styled.p`
    font-size: 14px;
    font-weight: 800;
    margin-bottom: 30px;
`

const LinkSubtitle = styled.p`
    font-size: 12px;
`

const Footer = () => {
    return (
        <FooterDiv>
            <RequestDiv>
                <Title>
                    Do you want to step in to the future before others
                </Title>
                <Button>Request Early Access</Button>
            </RequestDiv>
            <FooterLink>
                <LogoDiv>
                    <Logo>GPT-3</Logo>
                    <Right>
                        Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights
                        Reserved
                    </Right>
                </LogoDiv>
                <ContentDiv>
                    {footerData.map((data) => (
                        <LinkDiv>
                            <LinkTitle>{data.title}</LinkTitle>
                            {data.subtitle.map((sub) => (
                                <LinkSubtitle>{sub}</LinkSubtitle>
                            ))}
                        </LinkDiv>
                    ))}
                </ContentDiv>
            </FooterLink>
        </FooterDiv>
    )
}

export default Footer
