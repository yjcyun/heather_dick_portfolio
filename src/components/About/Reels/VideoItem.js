import React from 'react'
import styled from 'styled-components';

const VideoItem = ({thumbnail, video, onVideoSelect }) => {
  return (
    <VideoItemWrapper onClick={() => onVideoSelect(video)}>
    
      <img src={thumbnail} alt="vimeo thumbnail" 
     className="thumbnail-img"/>

    </VideoItemWrapper>
  )
}

const VideoItemWrapper = styled.div`
margin: 0 0.5rem;
.thumbnail-img{
  width: 10rem;
  cursor: pointer;
}

`;

export default VideoItem;
