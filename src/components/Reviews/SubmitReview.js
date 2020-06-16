import React from 'react';
import { Link } from 'gatsby';
import BannerSubtitle from '../BannerSubtitle';
import Bounce from 'react-reveal/Bounce';
import styled from 'styled-components';
import clap from '../../images/clap.png';

const SubmitReview = () => {
  return (
    <SubmitReviewWrapper>
      <Bounce right duration={1500}>
        <BannerSubtitle icon={clap} title="Send  Your Reviews!" />
        <Link to="/contact" className="about-btn-container">
          <button className="btn about-btn">send email</button>
        </Link>
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