import React from 'react'
import ReactPlayer from 'react-player';
import styled from 'styled-components';


const Player = ({ url, width,children }) => {
  return (
    <PlayerWrapper>
      <ReactPlayer
        width={width}
        url={url}
        config={{
          vimeo: {
            playerOptions: {
              color: '783fbe'
            }
          }
        }}
      />
      {children}
    </PlayerWrapper>
  )
}

const PlayerWrapper = styled.div`
display:flex;
justify-content: center;
align-items:center;
margin: 10rem auto;
`;

export default Player
