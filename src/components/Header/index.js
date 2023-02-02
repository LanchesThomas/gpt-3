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
`
const ContentDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const ImgDiv = styled.div`
width: 50%;
`

const HeaderImg = styled.img`
object-fit: cover;
width: 100%;
height: 100%;`

const Header = () => {
    return (
        <HeaderDiv>
            <ContentDiv>
                <Title />
                <Description />
                <Input />
                <People />
            </ContentDiv>
            <ImgDiv>
                <HeaderImg src={HeaderImgPng}/>
            </ImgDiv>
        </HeaderDiv>
    )
}

export default Header
