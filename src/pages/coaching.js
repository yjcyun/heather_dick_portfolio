import React from 'react';
import Layout from '../components/Layout';
import CoachingList from '../components/Coaching/CoachingList';

const coaching = () => {
  return (
    <Layout>
      <div className="page-height extra-margin max-width">
        <CoachingList />
      </div>
    </Layout>
  )
}

export default coaching
