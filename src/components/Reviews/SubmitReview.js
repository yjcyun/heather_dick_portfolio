import React from 'react';
import { Link } from 'gatsby';
import BannerSubtitle from '../BannerSubtitle';
import clap from '../../images/clap.png';

const SubmitReview = () => {
  return (
    <div>
      <BannerSubtitle icon={clap} title="Send Heather Your Reviews!" />
      <a href="" style={{ display:'flex', justifyContent:'center', marginTop:'2rem' }}>
        <button className="btn about-btn">send email</button>
      </a>
    </div>
  )
}

export default SubmitReview
