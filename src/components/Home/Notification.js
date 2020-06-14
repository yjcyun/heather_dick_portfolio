import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ToastContainer, toast } from 'react-toastify';
import { IoIosCloseCircle } from 'react-icons/io';
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

const CloseButton = ({ closeToast }) => (
  <i role="button" tabIndex={0} onKeyDown={closeToast} className="material-icons" onClick={closeToast}><IoIosCloseCircle /></i>
)

const Notification = () => {
  const { allStrapiNotifications: { nodes } } = useStaticQuery(query);
  nodes.map(item => {
    if (item.home) {
      return toast.success(item.notification);
    } else {
      return null;
    }
  })

  return (
    <ToastWrapper>
      <ToastContainer
        position="bottom-left"
        autoClose={6000}
        closeButton={CloseButton}
      />
    </ToastWrapper>
  );
}

const ToastWrapper = styled.div`
.Toastify__toast {
  background-color: white;
  color: black;
  border-top: 10px solid var(--mainPurple);
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  height: 7rem;
  width: 15rem;
}

@media (max-width: 420px){
  .Toastify__toast{
    width: 100%;
  }
}
`;

export default Notification