import React from 'react';
import BannerSubtitle from '../BannerSubtitle';
import Obfuscate from 'react-obfuscate';
import styled from 'styled-components';
import clap from '../../images/clap.png';

const SubmitReview = () => {
  return (
    <SubmitReviewWrapper>
      <BannerSubtitle icon={clap} title="Send  Your Reviews!" />
      <Obfuscate email="info@heatherdick.com" aria-label="Email Me" className="about-btn-container">
        <button className="btn about-btn">send email</button>
      </Obfuscate>
    </SubmitReviewWrapper>
  )
}

const SubmitReviewWrapper = styled.div`
text-align:center;
.about-btn{
  margin-top:2rem;
}
`;
export default SubmitReview;