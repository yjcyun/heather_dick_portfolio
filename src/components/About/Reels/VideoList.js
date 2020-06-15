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
display:-ms-grid;
display:grid;
-ms-grid-columns: 1fr 1fr;
grid-template-columns: 1fr 1fr;

@media(min-width: 768px){
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:center;
  -ms-flex-pack:center;
  justify-content:center;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-flex:1;
  -ms-flex:1;
  flex:1;
}
`;

export default VideoList
