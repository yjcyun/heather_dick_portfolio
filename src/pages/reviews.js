import React from 'react';
import Layout from '../components/Layout';
import Title from '../components/Title';
import ReviewList from '../components/Reviews/ReviewList';

const Reviews = () => {
  return (
    <Layout>
      <div className="page">
        <Title
          title="Reviews & Testimonials"
          subtitle="See what Heather's students and press are saying about her work"
        />
        <ReviewList />
      </div>
    </Layout>
  )
}

export default Reviews
