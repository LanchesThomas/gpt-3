import styled from 'styled-components'
import { RxHamburgerMenu } from 'react-icons/rx'
import { VscClose } from 'react-icons/vsc'
import Logo from './logo'
import { useState, useEvent } from 'react'
import BurgerMenu from './burgerMenu'
import Button from './button'
import useWindowDimensions from '../../utils/hooks/useWindowDimensions'
import resolution from '../../utils/resolution/resolution'

const MobileNavBarDiv = styled.div`
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5%;
    position: relative;

`

const Burger = styled(RxHamburgerMenu)`
    font-size: 30px;
    cursor: pointer;
`

const Close = styled(VscClose)`
    font-size: 30px;
    cursor: pointer;

`

const MobileNavBar = () => {
    const [isActive, setIsActive] = useState(true)
    const {width} = useWindowDimensions()

    function toggle() {
        setIsActive(!isActive)
    }

    return (
        <div>
            {isActive ? (
                <MobileNavBarDiv>
                    <Logo />
                    {width > 481 ? <Button /> : null}
                    <Burger onClick={toggle} />
                </MobileNavBarDiv>
            ) : (
                <MobileNavBarDiv>
                    <Logo />
                    {width > 481 ? <Button /> : null}
                    <BurgerMenu />
                    <Close onClick={toggle} />
                </MobileNavBarDiv>
            )}
        </div>
    )
}

export default MobileNavBar
