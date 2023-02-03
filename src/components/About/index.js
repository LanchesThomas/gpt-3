import styled from 'styled-components'
import colors from '../../datas/colors'
import aboutArticle from '../../datas/aboutArticle.json'
import resolution from '../../utils/resolution/resolution'

const MainDiv = styled.div`
    width: 80%;
    margin: auto;
`

const AboutDiv = styled.div`
    background-color: ${colors.backgroundSecondary};
    z-index: -2;
    position: relative;
    overflow: hidden;

    & #filter-2 {
        top: 150px;
    }
`

const BottomRightFilter = styled.div`
    position: absolute;
    width: 581px;
    height: 410px;
    bottom: -300px;
    right: -350px;
    z-index: -1;
    background: #1b78de;
    filter: blur(150px);
`

const TopLeftFilter = styled.div`
    position: absolute;
    width: 581px;
    height: 410px;
    z-index: -1;
    background: #0f4279;
    filter: blur(60px);
    top: -250px;
    left: -350px;
`

const ContentDiv = styled.div`
    padding: 50px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0px;
    height: 100%;

    @media (max-width: ${resolution.large}) {
        display: flex;
        flex-direction: column;
    }

    & #item-text {
        grid-column-start: 2;
        grid-column-end: 4;
    }

    & #item-slogan {
        grid-column-start: 1;
        grid-column-end: 3;
    }

    & #item-explore {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`

const AboutTitle = styled.h2`
    font-size: 24px;
    font-weight: 800;
    color: white;
`

const AboutText = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #81afdd;
`
const AboutSlogan = styled.h2`
    font-size: 34px;
    font-weight: 800;
    background-image: linear-gradient(#ae67fa, #f49867);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
const AboutExplore = styled.p`
    color: #ff8a71;
    font-size: 16px;
    font-weight: 500;
`

const ArticleTitle = styled.h3`
    color: white;
    font-size: 24px;
    font-weight: 800;

    &:before {
        display: block;
        content: '';
        width: 38px;
        height: 3px;
        background: linear-gradient(#ae67fa, #f49867);
        margin-bottom: 10px;
    }
`

const ArticleContent = styled.p`
    color: #81afdd;
    font-size: 16px;
    font-weight: 500;
    padding: 0px 10px;
`

const About = () => {
    return (
        <MainDiv>
            <AboutDiv id="what-is-gpt">
                <TopLeftFilter />
                <ContentDiv>
                    <AboutTitle>What is GPT-3</AboutTitle>
                    <AboutText id="item-text">
                        We so opinion friends me message as delight. Whole front
                        do of plate heard oh ought. His defective nor convinced
                        residence own. Connection has put impossible own
                        apartments boisterous. At jointure ladyship an insisted
                        so humanity he. Friendly bachelor entrance to on by.
                    </AboutText>
                    <AboutSlogan id="item-slogan">
                        The possibilities are beyond your imagination
                    </AboutSlogan>
                    <AboutExplore id="item-explore">
                        Explore The Library
                    </AboutExplore>
                    {aboutArticle.map((article) => (
                        <div key={article.title}>
                            <ArticleTitle>{article.title}</ArticleTitle>
                            <ArticleContent>{article.content}</ArticleContent>
                        </div>
                    ))}
                </ContentDiv>
                <BottomRightFilter />
            </AboutDiv>
        </MainDiv>
    )
}

export default About
