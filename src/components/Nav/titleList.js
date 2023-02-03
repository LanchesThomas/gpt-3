import styled from 'styled-components'
import pagesData from '../../datas/pages.json'
import colors from '../../datas/colors'
import { Link } from 'react-scroll'

const NavUl = styled.ul`
    display: flex;
    gap: 30px;
`

const NavePages = styled.li`
    list-style: none;
    font-weight: 500;
    font-size: 18px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    &:after {
        display: block;
        content: '';
        border-bottom: solid 3px ${colors.primary};
        transform: scaleX(0);
        transition: transform 200ms ease;
    }
    &:hover:after {
        transform: scaleX(1);
    }
`

const TitleList = () => {
    return (
        <NavUl>
            {pagesData.map((page) => (
                <NavePages key={`title-of-${page.title}`}>
                    <Link
                        to={page.id}
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={1000}
                    >
                        {page.title}
                    </Link>
                </NavePages>
            ))}
        </NavUl>
    )
}

export default TitleList
