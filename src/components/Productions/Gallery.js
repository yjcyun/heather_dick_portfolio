import React, { Component } from 'react';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import styled from 'styled-components';
import ProductionsItem from './ProductionsItem';

export class Gallery extends Component {
  state = {
    showLightbox: false,
    photoIndex: 0
  };

  // Close modal
  closeModal = () => {
    this.setState({ showLightbox: false })
  }

  render() {
    const { photos } = this.props;
    const { photoIndex, showLightbox } = this.state;
    console.log(photoIndex);
    return (
      <>
        {/* Display images in a grid layout */}
        <LightboxContainer>
          {photos.map((image, index) => {
            return (
              <PreviewButton
                key={image.img.childImageSharp.fluid.base64}
                type="button"
                onClick={() => this.setState({
                  showLightbox: true,
                  photoIndex: index
                })}
              >
                <ProductionsItem item={image} />
              </PreviewButton>
            )
          })}
        </LightboxContainer>

        {/* Image Modal */}
        {showLightbox && (
          <Lightbox
            mainSrc={photos[photoIndex].img.childImageSharp.fluid.src}
            //selectedImage.img.childImageSharp.fluid.src}
            imageTitle={photos[photoIndex].show}
            imageCaption={photos[photoIndex].description}
            enableZoom={false}
            onCloseRequest={() => this.closeModal()}
            nextSrc={photos[(photoIndex + 1) % photos.length].img.childImageSharp.fluid.src}
            prevSrc={photos[(photoIndex + photos.length - 1) % photos.length].img.childImageSharp.fluid.src}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + photos.length - 1) % photos.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % photos.length
              })
            }
          >
          </Lightbox>
        )}
      </>
    )
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
  
  &:focus{
    outline: none
  }
`;

export default Gallery