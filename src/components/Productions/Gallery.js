import React, { Component } from 'react';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import styled from 'styled-components';
import ProductionsItem from './ProductionsItem';

export class Gallery extends Component {
  state = {
    showLightbox: false,
    selectedImage: null
  };

  // Close modal
  closeModal = () => {
    this.setState({ showLightbox: false })
  }

  render() {
    const { photos } = this.props;
    const { showLightbox, selectedImage } = this.state;

    return (
      <>
        {/* Display images in a grid layout */}
        <LightboxContainer>
          {photos.map(image => (
            <PreviewButton
              key={image.img.childImageSharp.fluid.base64}
              type="button"
              onClick={() => this.setState({ showLightbox: true, selectedImage: image })}
            >
              <ProductionsItem item={image} />
            </PreviewButton>
          ))}
        </LightboxContainer>

        {/* Image Modal */}
        {showLightbox && (
          <Lightbox
            mainSrc={selectedImage.img.childImageSharp.fluid.src}
            imageTitle={selectedImage.show}
            imageCaption={selectedImage.description}
            enableZoom={false}
            onCloseRequest={() => this.closeModal()}>
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