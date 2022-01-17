import React, { Component } from "react"
import styled from "styled-components"
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"
import Subtitle from "../../Subtitle"

class Reels extends Component {
  // *** Replace Thumbnail and URL ***
  state = {
    videos: [
      {
        id: 0,
        url: "140710198",
        thumbnail:
          "https:i.vimeocdn.com/video/937784147-873d19aa38804c99ac568c3c15da910a03571614f0b66419e59509b1e4b75089-d_380x214",
      },
      {
        id: 1,
        url: "117696952",
        thumbnail:
          "https://i.vimeocdn.com/video/937785066-96dfdb17d1810e0a6e21189cd80cae7277c1824415f2bcc32a3111bf565ef1a5-d_380x214",
      },
    ],
    selectedVideo: "140710198",
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <ReelsWrapper>
        <div className="max-width">
          <Subtitle
            subtitle="REELS"
            linkUrl="https://vimeo.com/siriustheatricalcompany"
            linkText="All reels"
          />
          <div className="videos">
            {/* Display Video Player */}
            <VideoDetail video={this.state.selectedVideo} />
            {/* Display Thumbnails */}
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      </ReelsWrapper>
    )
  }
}

const ReelsWrapper = styled.section`
  margin: 3rem auto 0;
  min-height: 60vh;
  padding: 1rem 1rem 5rem;

  .videos {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 16px;
    margin-top: 1rem;
  }

  .max-width {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  @media (min-width: 996px) {
    margin: 2rem auto 0;
    margin-top: 0;
    padding: 3rem 7rem 7rem;

    .max-width {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
    }

    .videos {
      margin-left: 4rem;
    }
  }

  @media (min-width: 1024px) {
    padding: 7rem 2rem;

    .videos {
      margin-left: 8rem;
    }
  }
`

export default Reels
