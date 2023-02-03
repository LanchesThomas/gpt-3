import styled from 'styled-components'
import Button from './button'
import TitleList from './titleList'
import useWindowDimensions from '../../utils/hooks/useWindowDimensions'
import { menuAnimation } from '../../utils/animation'
import colors from '../../datas/colors'

const BurgerMenuDiv = styled.div`
    position: absolute;
    right: 5px;
    top: 60px;
    border: 2px solid white;
    width: 150px;
    display: flex;
    align-items: center;
    flex-direction: column;
    animation : ${menuAnimation};
    animation-duration: 200ms;
    animation-timing-function: ease-in-out;
    background-color: ${colors.background};

    & ul {
        flex-direction: column;
    }

    & .button {
        padding: 10px;
        border-top: 2px solid white;
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 15px;

        & button {
            width: 100%;
        }
    }
`

const BurgerMenu = () => {
    const {width} = useWindowDimensions()

    return (
        <BurgerMenuDiv>
            <TitleList />
            {width < 481 ? <Button /> : null}
        </BurgerMenuDiv>
    )
}

export default BurgerMenu
