import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app;
import styled from 'styled-components';
import ProductionsItem from './ProductionsItem';

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      thumbnails: []
    };
    
  }



  render() {
    const { photoIndex, isOpen, thumbnails } = this.state;
    const { photos } = this.props;

    const ImgArr = photos.map(photo => {
      const image = photo.img.childImageSharp.fluid.srcSet;
      this.setState({ thumbnails: image })
    });

    console.log(ImgArr);
    return (
      <div>
        <LightboxContainer>
          {photos.map((image, i) => {
            return (
              <PreviewButton
                key={i}
                type="button"
                onClick={() => this.setState({ isOpen: true, selectedImage: image })}
              >
                <ProductionsItem item={image} />
              </PreviewButton>
            )
          })}
        </LightboxContainer>

        {isOpen && (
          <Lightbox
            mainSrc={thumbnails[photoIndex]}
            nextSrc={thumbnails[(photoIndex + 1) % thumbnails.length]}
            prevSrc={thumbnails[(photoIndex + thumbnails.length - 1) % thumbnails.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + thumbnails.length - 1) % thumbnails.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % thumbnails.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

const LightboxContainer = styled.div`
display:grid;
grid-row-gap: 1.5rem;
padding: 3rem 2rem 8rem;

@media(min-width: 768px){
  grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
  grid-gap: 1.5rem;
}
`;

const PreviewButton = styled.button`
background: transparent;
border: none;
padding: 0;
margin: 0;

`;