import React from 'react'
import styled from 'styled-components';

const Subtitle = ({ subtitle, white }) => {
  return (
    <SubtitleWrapper white={white}>
      <h4>{subtitle}</h4>
      <hr className="short-hr"/>
    </SubtitleWrapper>
  )
}

const SubtitleWrapper = styled.div`
font-family: var(--titleFont);
font-size:2.5rem;
display: inline-block;
h4{
font-weight: 300;
color: ${props=>props.white? '#fff': '000'};
}
@media (min-width: 768px){
  font-size: 4rem;
}
`;
export default Subtitle
