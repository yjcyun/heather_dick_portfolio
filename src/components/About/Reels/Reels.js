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
        thumbnail: "https://i.vimeocdn.com/video/532338250_640.jpg",
      },
      {
        id: 2,
        url: "139617873",
        thumbnail: "https://i.vimeocdn.com/video/535538525_640.jpg"
      },
      {
        id: 3,
        url: "140080056",
        thumbnail: "https://i.vimeocdn.com/video/537346272_640.jpg"
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
          <Subtitle subtitle="REELS" linkUrl="https://vimeo.com/siriustheatricalcompany" linkText="All reels"/>
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
  margin:3rem auto 0;
  min-height: 60vh;
  padding: 1rem 1rem 5rem;

  .videos{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
    -ms-flex-direction:column;
    flex-direction:column;
    margin-top:16px;
    margin-top: 1rem;
  }

 .max-width{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
    -ms-flex-direction:column;
    flex-direction:column;
    -webkit-box-pack:justify;
    -ms-flex-pack:justify;
    justify-content:space-between;
  }

 @media (min-width: 996px) {
  margin:2rem auto 0;
  margin-top: 0;
  padding: 3rem 7rem 7rem;

  .max-width{
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
    -ms-flex-direction:row;
    flex-direction:row;
  }
 }

  @media(min-width: 1024px){
    padding: 7rem 2rem;
  }
`;

export default Reels

