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
      }
    }
  }`;

const CloseButton = ({ closeToast }) => (
  <i className="material-icons" onClick={closeToast}><IoIosCloseCircle /></i>
)

const Notification = () => {
  const { allStrapiNotifications: { nodes } } = useStaticQuery(query);
  console.log(nodes);
  nodes.map(item=>{
    return toast.success(item.notification);
  })

  return (
    <ToastWrapper>
      <ToastContainer
        position="bottom-left"
        autoClose={false}
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
@media(min-width: 768px) {
  .Toastify__toast{
    left: 10px;
  }
}
`;

export default Notification