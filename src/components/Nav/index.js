import styled from 'styled-components'
import pagesData from '../../datas/pages.json'
import LoginButton from './button'
import useWindowDimensions from '../../utils/hooks/useWindowDimensions'
import Logo from './logo'
import MobileNavBar from './mobile'
import TitleList from './titleList'


const NavBar = styled.nav`
    width: 100%;
    height: 58px;
    margin: 52px auto;
    color: white;
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: space-around;
`

const Nav = () => {
    const { width } = useWindowDimensions()

    return width < 1024 ? (
        <MobileNavBar />
    ) : (
        <NavBar>
            <Logo />
            <TitleList />
            <LoginButton />
        </NavBar>
    )
}

export default Nav
