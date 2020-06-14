import React from 'react'
import styled from 'styled-components';
import Subtitle from '../../Subtitle';
import AudioItem from './AudioItem';

const track = [267474434, 267474514, 267474514];

const Audio = () => {
  return (
    <AudioWrapper>
      <div className="max-width">
        <Subtitle subtitle="AUDIO" white />
        <div className="audio-item-container">
          {track.map((item, index) => {
            return <div key={index}><AudioItem track={item} /></div>
          })}
        </div>
      </div>
    </AudioWrapper>
  )
}

const AudioWrapper = styled.section`
background:var(--lightPurple);
padding:3rem 1rem;

.max-width{
   display:flex;
   flex-direction:column;
 }

.audio-item-container {
  display:grid;
  grid-template-columns: 1fr;
  
}

.audio-item-container div{
  display:flex;
  justify-content: center;
  align-items:center;
  margin-bottom:1rem;
}

@media (min-width:996px){
  padding:7rem;

  .max-width{
    flex-direction:row;
    justify-content:space-between;
  }
  
  .audio-item-container {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .audio-item-container div{
    justify-content: flex-end;
    margin-bottom:0;
  }
}

@media(min-width: 1024px){
  padding: 7rem 2rem;
}
`;

export default Audio
