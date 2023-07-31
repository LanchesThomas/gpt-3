import styled from 'styled-components'
import {ArticleData} from '../../datas/articleData'
import resolution from '../../utils/resolution/resolution'

const ArticleDiv = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;

    & #article-0 {
        grid-row-start: 1;
        grid-row-end: 3;
        height: 100%;
        @media (max-width: ${resolution.large}) {
            height: 300px;
        }
    }

    @media (max-width: ${resolution.large}) {
        display: flex;
        flex-direction: column;
    }
`

const Article = styled.div`
    display: flex;
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (max-width: ${resolution.large}) {
    height: 300px;
    }
`

const ImgDiv = styled.div`
    height: 50%;
    `
    
    const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const ContentDiv = styled.div`
    background-color: #042c54;
    height: 50%;
    color: white;
    padding: 0px 20px;
    position: relative;
`

const Date = styled.p`
    font-size: 12px;
    font-weight: 700;
`

const ArticleTitle = styled.p`
    font-size: 20px;
    font-weight: 800;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
    @media (max-width: ${resolution.large}) {
        font-size: 18px;
    }
`

const Read = styled.p`
    font-size: 12px;
    font-weight: 700;
    position: absolute;
    bottom: 2%;
`

const Arcticle = ({ image, date, title, read }) => {
    return (
        <ArticleDiv>
            {ArticleData.map((article, index) => (
                <Article id={`article-${index}`}>
                    <ImgDiv>
                        <Img src={article.image} />
                    </ImgDiv>
                    <ContentDiv>
                        <Date>{article.date}</Date>
                        <ArticleTitle>{article.title}</ArticleTitle>
                        <Read>{article.read}</Read>
                    </ContentDiv>
                </Article>
            ))}
        </ArticleDiv>
    )
}

export default Arcticle
