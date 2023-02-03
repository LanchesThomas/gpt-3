import styled from 'styled-components'
import Title from './title'
import Description from './description'
import Input from './input'
import People from './people'
import HeaderImgPng from '../../assets/ai.png'

const HeaderDiv = styled.header`
    width: 80%;
    margin: auto;
    display: flex;
    @media (max-width: 1600px) {
        flex-direction: column;
    }
`
const ContentDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media (max-width: 1600px) {
        width: 100%;
    }
`

const ImgDiv = styled.div`
    width: 50%;
    @media (max-width: 1600px)  { 
        width: 80%;
        height: 50%;
        margin:auto;
    }
`

const HeaderImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    overflow: visible;
`

const Header = () => {
    return (
        <HeaderDiv id="home">
            <ContentDiv>
                <Title />
                <Description />
                <Input />
                <People />
            </ContentDiv>
            <ImgDiv>
                <HeaderImg src={HeaderImgPng} />
            </ImgDiv>
        </HeaderDiv>
    )
}

export default Header
