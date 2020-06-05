import React, { Component } from 'react';
import styled from 'styled-components';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import image1 from '../../../images/thumbnail1.jpg';
import image2 from '../../../images/thumbnail2.jpg';
import image3 from '../../../images/thumbnail3.jpg';
import image4 from '../../../images/thumbnail4.jpg';

const thumbnails = [image1, image2, image3, image4];

class Reels extends Component {

  state = {
    videos: [
      {
        id: 0,
        url: "https://player.vimeo.com/video/140710198",
        thumbnail: thumbnails[0]
      },
      {
        id: 1,
        url: "https://player.vimeo.com/video/137428733",
        thumbnail: thumbnails[1]
      },
      {
        id: 2,
        url: "https://player.vimeo.com/video/139617873",
        thumbnail: thumbnails[2]
      },
      {
        id: 3,
        url: "https://player.vimeo.com/video/140080056",
        thumbnail: thumbnails[3]
      },
    ],
    selectedVideo: null
  }

  // componentDidMount(){
  //   const videoID = [137428733, 137428733, 137428733, 137428733];

  //   axios.get(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoID[0]}`)
  //   .then(response => this.setState({videos:response.data}))
  //   .catch(error => console.log(error));
  // }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <ReelsWrapper>
        <h1>production reels</h1>
        <hr />
        <div className="videos">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect} />
        </div>
      </ReelsWrapper>
    )
  }
}

const ReelsWrapper = styled.section`
 /* margin:10rem auto; */
 padding:3rem 0;
  min-height: 100vh;

 .videos{
 display:flex;
 }
`;

export default Reels

