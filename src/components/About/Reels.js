import React, { Component } from 'react';
import Player from './Player';
import Thumbnails from './VideoList';
import VideoList from './VideoList';

class Reels extends Component {
  state = {
    videos: [
      "https://player.vimeo.com/video/137428733",
      "https://player.vimeo.com/video/140710198",
      "https://player.vimeo.com/video/140710198",
      "https://player.vimeo.com/video/140710198"
    ],
    selectedVideo: null
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect} />
      </div>
    )
  }
}

export default Reels

