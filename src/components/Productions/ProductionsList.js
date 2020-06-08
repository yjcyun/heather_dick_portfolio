import React, { useState } from 'react'
import styled from 'styled-components';
import Image from 'gatsby-image';
import ProductionsItem from './ProductionsItem';
import ProductionModal from './ProductionModal';


const ProductionsList = ({ posters }) => {
  const [selectedPoster, setPoster] = React.useState(null);

  const openModal = (item) => {
    setPoster(item);
  }

  const closeModal = () => {
    setPoster(null);
  }

  return (
    <ProductionsListWrapper>
      {
        posters.map(item => {
          console.log(item);
          return (
            <div key={item.id}>
              <div onClick={() => openModal(item)}>
                <ProductionsItem item={item} />
              </div>

              <ProductionModal
                show={selectedPoster !== null}
                closeModal={closeModal}
              >
                <div className="modal-children">
                  <Image fluid={selectedPoster ? selectedPoster.img.childImageSharp.fluid : null} alt="poster" />
                  <div className="modal-text">
                    <p><strong>{selectedPoster ? selectedPoster.show : null}</strong> from {selectedPoster ? selectedPoster.company : null}</p>
                    <p>
                      Directed by : {selectedPoster ? selectedPoster.director : null} on {selectedPoster ? selectedPoster.date : null}</p>
                  </div>
                </div>
              </ProductionModal>
            </div>
          )
        })
      }
    </ProductionsListWrapper>
  )
}

const ProductionsListWrapper = styled.div`
display:grid;
grid-row-gap: 1.5rem;

.modal-children{
  display:grid;
  grid-gap: 1rem;
  max-height: 70vh;
}
.modal-text{
  padding-bottom: 1rem;
  display:flex;
  flex-direction: column;
}

@media(min-width: 768px){
  padding: 0;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1.5rem;
}
`;
export default ProductionsList
