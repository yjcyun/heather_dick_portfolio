import React from 'react'
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <VideoItemWrapper onClick={() => onVideoSelect(video)}>
      <ReactPlayer
        url={video}
        width="12rem"
        config={{
          vimeo: {
            playerOptions: {
              color: '783fbe'
            }
          }
        }}
      />
    </VideoItemWrapper>
  )
}

const VideoItemWrapper = styled.div`
margin: 0 1rem;

`;

export default VideoItem;
