import styled from "styled-components"

const BlurFilter = styled.div`
position: absolute;
width: 1013px;
height: 1013px;
left: -336px;
top: -305px;
z-index: -1;
background: #002853;
filter: blur(282px);

@media (max-width: 1013px) {
    width: 100%;
}

`

const Filter = () => {
  return (
    <BlurFilter />
  )
}

export default Filter
