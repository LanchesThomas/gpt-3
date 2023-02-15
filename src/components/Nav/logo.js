import styled from 'styled-components'


const LogoText = styled.h3`
    font-weight: 800;
    cursor: pointer;
`

const LogoLink = styled.a`
text-decoration: none;
color: inherit;
`

const Logo = () => {
    return <LogoText><LogoLink href='/'>lanchesthomas</LogoLink></LogoText>
}

export default Logo
