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
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-pack:center;
-ms-flex-pack:center;
justify-content:center;
-webkit-box-align:center;
-ms-flex-align:center;
align-items:center;

.thumbnail-img{
  width: 144px;
  width: 9rem;
  cursor: pointer;
}

@media (min-width: 996px){
  .thumbnail-img{
    width: 14rem;
  }
}
`;

export default VideoItem;