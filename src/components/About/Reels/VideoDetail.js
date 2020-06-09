import React from 'react';
import styled from 'styled-components';

const VideoDetail = ({video}) => {

//console.log(video);

  return (
    <VideoDetailWrapper>
     {video}
    </VideoDetailWrapper>
  )
}

const VideoDetailWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 2rem auto;
flex:3;
`;

export default VideoDetail
