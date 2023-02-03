import styled from 'styled-components'
import resolution from '../../utils/resolution/resolution'

const Text = styled.h3`
font-size: 20px;
font-weight: 400;
color: #81AFDD;
@media (max-width: ${resolution.medium}) {
    font-size: 16px;
}
`

const Description = () => {
    return (
        <Text>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
        </Text>
    )
}

export default Description
