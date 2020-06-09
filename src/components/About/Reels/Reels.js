import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

// import image1 from '../../../images/thumbnail1.jpg';
// import image2 from '../../../images/thumbnail2.jpg';
// import image3 from '../../../images/thumbnail3.jpg';
// import image4 from '../../../images/thumbnail4.jpg';

let thumbnails = [];

class Reels extends Component {
  state = {
    videos: [
      {
        id: 0,
        url: "https://vimeo.com/140710198",
        thumbnail: thumbnails[0]
      },
      {
        id: 1,
        url: "https://vimeo.com/137428733",
        thumbnail: thumbnails[1]
      },
      {
        id: 2,
        url: "https://vimeo.com/139617873",
        thumbnail: thumbnails[2]
      },
      {
        id: 3,
        url: "https://vimeo.com/140080056",
        thumbnail: thumbnails[3]
      },
    ],
    selectedVideo: null
  }

  async componentDidMount() {
    const videoID = ['https://vimeo.com/140710198']

    const response = await axios.get(`https://vimeo.com/api/oembed.json?url=${videoID[0]}`);

    const data = await response.data;

    this.setState({ selectedVideo: data.html });
    thumbnails.push(data.thumbnail_url);
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }

  render() {
    // console.log(thumbnails[0]);
    return (
      <ReelsWrapper>
        <h1>production reels</h1>
        <hr />
        <div className="videos">
          <VideoDetail video={this.state.selectedVideo
} />
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
 flex-direction: column;
 }
`;

export default Reels

