import React from 'react';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';

const ProductionModal = ({ show, children, closeModal }) => {

  if (show) {
    return (
      <ModalWrapper>
        <div className="modal-backdrop"
          onClick={closeModal} />
        <div className="modal-content">
          {children}

          <button onClick={closeModal}>
            <MdClose />
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
  background-color: rgba(0,0,0,0.1);
}
.modal-content{
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  min-height: 30%;
  width: 60%;
  background-color: white;
  box-shadow: 0 0 5px rgba(0,0,0,0.05);
  z-index:101;
  overflow:auto;
  padding: 2rem;
}
`;


export default ProductionModal;