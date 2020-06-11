import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Subtitle from '../../Subtitle';

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
        url: "140710198",
        thumbnail: thumbnails[0]
      },
      {
        id: 1,
        url: "137428733",
        thumbnail: thumbnails[1]
      },
      {
        id: 2,
        url: "139617873",
        thumbnail: thumbnails[2]
      },
      {
        id: 3,
        url: "140080056",
        thumbnail: thumbnails[3]
      },
    ],
    selectedVideo: "140710198"
  }

  async componentDidMount() {
    // const response1 = await axios.get(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/140710198}`);

    const response = await axios.get("https://api.vimeo.com/users/siriustheatricalcompany/videos?fields=uri,duration,pictures.sizes.link,download&uris=/videos/140710198,/videos/137428733&per_page=2");

    const data = await response.data;
    console.log(data);
    // const data1 = await response1.data;
    thumbnails.push(data.thumbnail_url);
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }


  render() {
    return (
      <ReelsWrapper>
        <Subtitle subtitle="PRODUCTION REELS" />
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
  margin:5rem auto 2rem;
  min-height: 100vh;
  padding: 0 5rem;

 .videos{
 display:flex;
 flex-direction: column;
 }
`;

export default Reels

