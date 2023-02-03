import styled from 'styled-components'
import PartnersData from '../../datas/partners.json'
import resolution from '../../utils/resolution/resolution'

const PartnerDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin: 100px;
    @media (max-width: ${resolution.medium}) {
        flex-direction: column;
        gap: 10px;
    }
`

const PartnerImg = styled.img`
    object-fit: cover;
`

const Partners = () => {
    return (
        <PartnerDiv>
            {PartnersData.map((partner) => (
                <a href={partner.url} key={partner.title}>
                    <PartnerImg
                        src={partner.image}
                        key={`${partner.title}-image`}
                        alt={partner.title}
                    />
                </a>
            ))}
        </PartnerDiv>
    )
}

export default Partners
