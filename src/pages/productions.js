import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';

const Productions = () => {
  return (
    <Layout>
      <div className="page-height page-margin">
        <Banner 
          heading="quote goes here"
          subHeading="Heather's productions"
        />
      </div>
    </Layout>
  )
}

export default Productions
