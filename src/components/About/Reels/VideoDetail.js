import React from 'react';
import styled from 'styled-components';

const VideoDetail = ({ video }) => {

  return (
    <VideoDetailWrapper>
      <div className="video-frame">
        <iframe src={`https://player.vimeo.com/video/${video}`} width="840" height="460" frameBorder="0" allow="fullscreen" allowFullScreen></iframe>
      </div>
    </VideoDetailWrapper>
  )
}

const VideoDetailWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto 3rem;

.video-frame{
  width: 840px;
  height: 460px;
  background: black;
}
`;

export default VideoDetail
