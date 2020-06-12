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
 background:#543864;
padding:7rem;
.max-width{
   display:flex;
   justify-content:space-between;
 }

.audio-item-container {
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.audio-item-container div{
  display:flex;
  justify-content: flex-end;
  align-items:center;
}
@media (min-width:996px){
  
}

`;

export default Audio
