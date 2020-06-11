import React from 'react';
import styled from 'styled-components';

const VideoDetail = ({ video }) => {

  return (
    <VideoDetailWrapper>
      <iframe src={`https://player.vimeo.com/video/${video}`} width="840" height="660" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>

      {/* <div dangerouslySetInnerHTML={{ __html: video }}></div> */}
    </VideoDetailWrapper>
  )
}

const VideoDetailWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
flex:3;
`;

export default VideoDetail
