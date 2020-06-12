import React from 'react'
import styled from 'styled-components';

const VideoItem = ({ thumbnail, video, onVideoSelect }) => {
  return (
    <VideoItemWrapper onClick={() => onVideoSelect(video)}>
      <img src={thumbnail} alt="vimeo thumbnail"
        className="thumbnail-img" />
    </VideoItemWrapper>
  )
}

const VideoItemWrapper = styled.div`
margin: 0.5rem;
display:flex;
justify-content:center;
align-items:center;

.thumbnail-img{
  width: 9rem;
  cursor: pointer;
}

@media (min-width: 996px){
  .thumbnail-img{
    width: 10rem;
  }
}
`;

export default VideoItem;
