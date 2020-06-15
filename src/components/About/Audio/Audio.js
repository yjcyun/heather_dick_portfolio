import React from 'react'
import styled from 'styled-components';
import Subtitle from '../../Subtitle';
import AudioItem from './AudioItem';

const track = [267474434, 267474514, 267474514];

const Audio = () => {
  return (
    <AudioWrapper>
      <div className="max-width">
        <Subtitle subtitle="AUDIO" linkUrl="https://www.google.ca" linkText="all audio" white />
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
/* background:var(--lightPurple); */
/* background:#131217; */
/* background:#333; */
background:#201733;
padding:3rem 1rem;

.max-width{
   display:-webkit-box;
   display:-ms-flexbox;
   display:flex;
   -webkit-box-orient:vertical;
   -webkit-box-direction:normal;
       -ms-flex-direction:column;
           flex-direction:column;
 }

.audio-item-container {
  display:-ms-grid;
  display:grid;
  -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
  margin-top:16px;
  margin-top: 1rem;
}

.audio-item-container div{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  margin-bottom:16px;
  margin-bottom:1rem;
}

@media (min-width:996px){
  padding:7rem;

  .max-width{
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
    -ms-flex-direction:row;
    flex-direction:row;
    -webkit-box-pack:justify;
    -ms-flex-pack:justify;
    justify-content:space-between;
  }

  .audio-item-container {
    -ms-grid-columns: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 0;
  }

  .audio-item-container div{
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    margin-bottom:0;
  }
}

@media(min-width: 1024px){
  padding: 7rem 2rem;
}
  `;

export default Audio
