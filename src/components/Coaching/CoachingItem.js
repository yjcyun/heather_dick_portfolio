import React from 'react'
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

// Props coming from CoachingList
const CoachingItem = ({ image, desc, title }) => {
  return (
    <CoachingItemWrapper>
      <div className="coaching-img">
        <img src={image.src} alt="coaching" />
      </div>
      <div className="coaching-text">
        <h1>{title}</h1>
        <ReactMarkdown source={desc} className="coaching-desc" />
      </div>
    </CoachingItemWrapper>
  )
}

const CoachingItemWrapper = styled.section`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
padding: 3rem 0 0;

  .coaching-img {
    -webkit-box-flex:2;
    -ms-flex:2;
    height: 25rem;
    flex:2;
    margin-bottom: 32px;
    margin-bottom: 2rem;
  }

  .coaching-img img {
   object-fit: contain;
   height: 100%;
  }

  .coaching-text{
    -webkit-box-flex:3;
    -ms-flex:3;
    flex:3;
    padding: 0 32px;
    padding: 0 2rem;
  }


  .coaching-desc p {
    margin-bottom:1rem;
  }

  .coaching-text h1{
  }

  h1{
    font-family: var(--titleFont);
    font-size: 25.6px;
    font-size:1.6rem;
    font-weight: 400;
    margin-bottom: 8px;
    margin-bottom:0.5rem;
    text-align:center;
  }
  
  @media (max-width: 768px){
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
    -ms-flex-direction:column;
    flex-direction:column;
    padding: 3rem 1rem 0;

    .coaching-text{
      padding: 0;
    }
  }
  
  @media (min-width: 996px){
    justify-content: center;
    align-items:center;

    .coaching-img{
      margin-bottom: 0;
    }

    h1{
      text-align:left;
    }
  }
`;

export default CoachingItem