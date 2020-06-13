import React from 'react';
import styled from 'styled-components';

const VideoDetail = ({ video }) => {
  return (
    <VideoDetailWrapper>
      <div className="video-frame">
        <iframe src={`https://player.vimeo.com/video/${video}?byline=0&portrait=0`} className="responsive-iframe" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen title={video}/>
      </div>
    </VideoDetailWrapper>
  )
}

const VideoDetailWrapper = styled.div`
  .video-frame{
    padding:56.25% 0 0 0;
    margin-bottom: 3rem;
    position:relative;
    background: black;
  }

  .responsive-iframe{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }
`;

export default VideoDetail
