import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ToastContainer, toast } from 'react-toastify';
import { IoIosClose } from 'react-icons/io';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const query = graphql`
  {
    allStrapiNotifications {
      nodes {
        notification
        id
        home
      }
    }
  }
`;

// Close toast button
const CloseButton = ({ closeToast }) => (
  <i role="button" tabIndex={0} onKeyDown={closeToast} className="material-icons" onClick={closeToast}><IoIosClose className="close-icon" /></i>
)

const Notification = () => {
  const { allStrapiNotifications: { nodes } } = useStaticQuery(query);

  // Only display home=true notification
  nodes.map(item => item.home
    ? toast(item.notification, {
      position: toast.POSITION.BOTTOM_LEFT
    })
    : null
  )

  return (
    <ToastWrapper>
      <ToastContainer
        position="bottom-left"
        autoClose={false}
        hideProgressBar={false}
        closeButton={CloseButton}
      />
    </ToastWrapper>
  );
}

const ToastWrapper = styled.div`
.Toastify__toast-container{
  width: auto;
}

.Toastify__toast {
  background-color: white;
  color: black;
  border-top: 10px solid var(--mainPurple);
  border-bottom-right-radius: 16px;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 16px;
  border-bottom-left-radius: 1rem;
  height: 112px;
  height: 7rem;
  width: 240px;
  width: 15rem;
  font-family: var(--mainFont);
}

.close-icon{
  font-size: 1.5rem;
}

@media (max-width: 420px){
  .Toastify__toast-container{
    width: 100%;
  }
  .Toastify__toast{
    width: 90%;
    margin: 0 auto 1rem;
  }
}
`;

export default Notification