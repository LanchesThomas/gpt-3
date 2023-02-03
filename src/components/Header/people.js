import styled from "styled-components"
import PeoplePng from'../../assets/people.png'
import resolution from "../../utils/resolution/resolution"

const PeopleDiv = styled.div`
display: flex;
align-items: center;
gap: 30px;
padding: 20px 0px;
@media (max-width: ${resolution.medium}) {
  flex-direction: column;
  gap: 10px;
}
 `

const PeopleImg = styled.img`
height: 36px;

`

const PeopleText = styled.p`
color: white;
font-size: 12px;
font-weight: 500;
`

const People = () => {
  return (
    <PeopleDiv>
      <PeopleImg src={PeoplePng}/>
      <PeopleText>1,600 people requested access a visit in last 24 hours</PeopleText>
    </PeopleDiv>
  )
}

export default People
