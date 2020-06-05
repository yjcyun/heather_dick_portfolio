import React from 'react'
import VideoItem from './VideoItem'
import styled from 'styled-components';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((item, index) => (
    <VideoItem
      key={index}
      video={item}
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
justify-content:center;
align-items: center;
`;

export default VideoList
