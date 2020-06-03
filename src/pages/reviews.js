import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';

const Reviews = () => {
  return (
    <Layout>
      <div className="page-height page-margin">
        <Banner
          heading="quote goes here"
          subHeading="what they're saying"
        />
      </div>
    </Layout>
  )
}

export default Reviews
