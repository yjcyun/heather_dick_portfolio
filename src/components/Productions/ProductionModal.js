import React from 'react';
import { IoMdClose } from 'react-icons/io';
import styled from 'styled-components';

const ProductionModal = ({ show, children, closeModal }) => {

  if (show) {
    return (
      <ModalWrapper>
        <div role="button" tabIndex={0} onKeyDown={closeModal} className="modal-backdrop"
          onClick={closeModal} />
        <div className="modal-content">
          {children}

          <button onClick={closeModal} className="close-btn">
            <IoMdClose className="icon" />
          </button>
        </div>
      </ModalWrapper>

    );
  }
  return null;

}

const ModalWrapper = styled.div`
position: fixed;
top:0;
left:0;
bottom:0;
right:0;

.modal-backdrop{
  position: fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  z-index:100;
  background-color: rgba(0,0,0,0.3);
}
.modal-content{
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  max-width: 30vw;
  background-color: white;
  box-shadow: 0 0 5px rgba(0,0,0,0.05);
  z-index:101;
  overflow:auto;
  padding: 2rem;
}
.close-btn{
  position:absolute;
  right:5px;
  top:5px;
  border: none;
  background: transparent;
  font-size: 1.5rem;
}
  @media (max-width: 420px) {
    .modal-content{
      max-width: 90vw;
      padding: 3rem 1rem 2rem;
    }
  }
  @media (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 2) {
    .modal-content{
      max-width: 55vw;
  } 

}
`;


export default ProductionModal;