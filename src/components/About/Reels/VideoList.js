import React from 'react'
import VideoItem from './VideoItem'
import styled from 'styled-components';

const VideoList = ({ videos, onVideoSelect }) => {
  // console.log(videos);
  const renderedList = videos.map(item => 
    (
    <VideoItem
      key={item.id}
      video={item.url}
      thumbnail={item.thumbnail}
      onVideoSelect={onVideoSelect}
    />
  ))
  return (
    <VideoListWrapper>
      {renderedList}
    </VideoListWrapper>
  )
}

const VideoListWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items: flex-start;
flex:1
`;

export default VideoList