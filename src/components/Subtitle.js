import React from 'react'
import styled from 'styled-components';

const Subtitle = ({ subtitle }) => {
  return (
    <SubtitleWrapper>
      <h4>{subtitle}</h4>
      <hr className="short-hr"/>
    </SubtitleWrapper>
  )
}

const SubtitleWrapper = styled.div`
font-family: var(--titleFont);
font-size:2rem;
display: inline-block;
h4{
font-weight: 300;
}
`;
export default Subtitle
