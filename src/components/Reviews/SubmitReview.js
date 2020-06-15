import React from 'react';
import BannerSubtitle from '../BannerSubtitle';
import Bounce from 'react-reveal/Bounce';
import Obfuscate from 'react-obfuscate';
import styled from 'styled-components';
import clap from '../../images/clap.png';

const SubmitReview = () => {
  return (
    <SubmitReviewWrapper>
      <Bounce right duration={1500}>
        <BannerSubtitle icon={clap} title="Send  Your Reviews!" />
        <Obfuscate email="info@heatherdick.com" aria-label="Email Me" className="about-btn-container">
          <button className="btn about-btn">send email</button>
        </Obfuscate>
      </Bounce>
    </SubmitReviewWrapper>
  )
}

const SubmitReviewWrapper = styled.div`
text-align:center;
.about-btn{
  margin-top:32px;
  margin-top:2rem;
}
`;
export default SubmitReview;