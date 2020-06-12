import React, { Component } from 'react';
import styled from 'styled-components';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Subtitle from '../../Subtitle';

class Reels extends Component {
  state = {
    videos: [
      {
        id: 0,
        url: "140710198",
        thumbnail: 'https://i.vimeocdn.com/video/537416426_640.jpg'
      },
      {
        id: 1,
        url: "137428733",
        thumbnail: "https://i.vimeocdn.com/video/532338250_640.webp",
      },
      {
        id: 2,
        url: "139617873",
        thumbnail: "https://i.vimeocdn.com/video/535538525_640.webp"
      },
      {
        id: 3,
        url: "140080056",
        thumbnail: "https://i.vimeocdn.com/video/537346272_640.webp"
      },
    ],
    selectedVideo: "140710198"
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <ReelsWrapper>
        <div className="max-width">
          <Subtitle subtitle="REELS" />
          <div className="videos">
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect} />
          </div>
        </div>
      </ReelsWrapper>
    )
  }
}

const ReelsWrapper = styled.section`
  margin:10rem auto 0;
  min-height: 100vh;
  padding: 7rem;
  background-image: linear-gradient(#fff 0%, var(--lightestPurple) 100%);

  .videos{
  display:flex;
  flex-direction:column;
  }

 .max-width{
   display:flex;
   flex-direction:column;
   justify-content:space-between;
 }

 @media (min-width: 996px) {
   padding: 2rem;
  .max-width{
    flex-direction:row;
  }
 }
`;

export default Reels

