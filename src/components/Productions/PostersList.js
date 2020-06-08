import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

const PostersList = ({posters}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }

  return (
    <ModalGateway>
      {modalOpen ? (
        <Modal onClose={toggleModal}>
          <Carousel views={posters.img} />
        </Modal>
      ) : null}
    </ModalGateway>
  );
}


export default PostersList;