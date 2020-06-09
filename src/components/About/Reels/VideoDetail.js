import React from 'react';
import styled from 'styled-components';

const VideoDetail = ({ video }) => {

  //console.log(video);

  return (
    <VideoDetailWrapper>
      <div dangerouslySetInnerHTML={{ __html: video }}></div>
    </VideoDetailWrapper>
  )
}

const VideoDetailWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 2rem auto;
flex:3;
padding-top: 3rem;
`;

export default VideoDetail
