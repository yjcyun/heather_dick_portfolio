import React from 'react'
import styled from 'styled-components';
import Subtitle from '../../Subtitle';
import AudioItem from './AudioItem';

const Audio = () => {
  return (
    <AudioWrapper>
      <div className="audio-productions">
        <Subtitle subtitle="AUDIO PRODUCTIONS" />
        <AudioItem />
       
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
