import React from 'react'
import VideoItem from './VideoItem'
import styled from 'styled-components';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(item => {
    return (
      <VideoItem
        key={item.id}
        video={item.url}
        thumbnail={item.thumbnail}
        onVideoSelect={() => onVideoSelect(item.url)}
        className="video-thumbnails"
      />
    )
  }
  );

  return (
    <VideoListWrapper>
      {renderedList}
    </VideoListWrapper>
  )
}

const VideoListWrapper = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;

@media(min-width: 768px){
  display:flex;
  justify-content:center;
  align-items: flex-start;
  flex:1;
}
`;

export default VideoList
