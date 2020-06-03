import React from 'react'
import Layout from '../components/Layout';
import Banner from '../components/Banner';

const blog = () => {
  return (
    <Layout>
      <div className="page-height page-margin">
        <Banner
          heading="quote goes here"
          subHeading="blog goes here"
        />
      </div>
    </Layout>
  )
}

export default blog
