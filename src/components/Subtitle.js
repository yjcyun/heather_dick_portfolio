import React from 'react'
import styled from 'styled-components';

const Subtitle = ({ subtitle }) => {
  return (
    <SubtitleWrapper>
      <h4>{subtitle}</h4>
      <hr />
    </SubtitleWrapper>
  )
}

const SubtitleWrapper = styled.div`
text-transform:uppercase;
font-size: 2.5rem;
`;
export default Subtitle
