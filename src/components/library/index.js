import styled from 'styled-components'
import articleData from '../../datas/articleData.json'
import resolution from '../../utils/resolution/resolution'
import Article from './article'

const LibraryDiv = styled.div`
    width: 80%;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    gap: 50px;
`

const TitleDiv = styled.div`
    align-items: flex-start;
    justify-content: center;
`

const Title = styled.h2`
    font-size: 62px;
    font-weight: 800;
    width: 100%;
    background-image: linear-gradient(#ae67fa, #f49867);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: ${resolution.medium}) {
        font-size: 46px;
    }
`



const Library = () => {

    return (
        <LibraryDiv id='library'>
            <TitleDiv>
                <Title>A lot is happening, We are blogging about it.</Title>
            </TitleDiv>
            <Article />
        </LibraryDiv>
    )
}

export default Library
