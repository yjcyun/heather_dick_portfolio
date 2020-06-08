import React, { useState } from 'react'
import styled from 'styled-components';
import posters from '../../constants/posters';
import ProductionsItem from './ProductionsItem';
import ProductionModal from './ProductionModal';


const ProductionsList = () => {
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
                  <img src={selectedPoster ? selectedPoster.img : null} />
                  <div className="modal-text">
                    <p>production date: {selectedPoster ? selectedPoster.date : null}</p>
                    <h3>{selectedPoster ? selectedPoster.title : null}</h3>
                    <p>{selectedPoster ? selectedPoster.subtitle : null}</p>
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
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
}

@media(min-width: 768px){
  padding: 0;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1.5rem;
}
`;
export default ProductionsList
