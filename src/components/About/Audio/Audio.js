import React from 'react'
import styled from 'styled-components';
import Subtitle from '../../Subtitle';

const Audio = () => {
  return (
    <AudioWrapper>
      <div className="audio-productions">
        <Subtitle subtitle="AUDIO PRODUCTIONS" />
      </div>
    </AudioWrapper>
  )
}

const AudioWrapper = styled.section`

.audio-productions{
  max-width:1170px;
  padding: 0 5rem;
}
`;

export default Audio
