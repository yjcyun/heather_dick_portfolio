import React, { Component } from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { IoMdClose } from 'react-icons/io';
import '@reach/dialog/styles.css';
import Img from 'gatsby-image';
import styled from 'styled-components';
import ProductionsItem from './ProductionsItem';

export class Gallery extends Component {
  state = {
    showLightbox: false,
    selectedImage: null
  };

  closeModal = () => {
    this.setState({ showLightbox: false })
  }

  render() {
    const { photos } = this.props;
    const { showLightbox, selectedImage } = this.state;

    return (
      <>
        <LightboxContainer>
          {photos.map(image => {
            return (
              <PreviewButton
                key={image.img.childImageSharp.fluid.src}
                type="button"
                onClick={() => this.setState({ showLightbox: true, selectedImage: image })}
              >
                <ProductionsItem item={image} />
              </PreviewButton>
            )
          })}
        </LightboxContainer>

        {showLightbox && (
          <DialogOverlay
            onDismiss={() => this.closeModal()}
            style={{ background: 'rgba(0, 0, 0, 0.9)' }}>
            <DialogContent aria-labelledby={selectedImage.id} 
            style={contentStyle}>
              <Img fluid={selectedImage.img.childImageSharp.fluid} />
              <p>{selectedImage.show}</p>
              <p>To be deterimined</p>
              <button type="button" onClick={() => this.closeModal()} style={closeBtn}>
                <IoMdClose />
              </button>
            </DialogContent>
          </DialogOverlay>
        )}
      </>
    )
  }
}

const contentStyle = {
  maxWidth: '40vw',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  marginTop: '0',
  marginBottom: '0'
}

const ModalContent = styled(DialogContent)`
color:red
`;

const closeBtn = {
  position: 'absolute',
  right: '5px',
  top: '5px',
  border: 'none',
  background: 'transparent',
  fontSize: '1.5rem',
  cursor: 'pointer'
};

const LightboxContainer = styled.div`
display:grid;
grid-row-gap: 1.5rem;
padding: 3rem 2rem;

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

export default Gallery
