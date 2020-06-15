import React from 'react';
import Layout from '../components/Layout';
import Title from '../components/Title';
import ReviewList from '../components/Reviews/ReviewList';
import SEO from '../components/SEO';
import SubmitReview from '../components/Reviews/SubmitReview';

const Reviews = () => {
  return (
    <Layout>
    <SEO title="Reviews & Testimonials" description="reviews and testimonials page"/>
      <div className="page">
        <Title
          title="Reviews & Testimonials"
          subtitle="See what Heather's students and press are saying about her work"
        />
        <ReviewList />
        <SubmitReview />
      </div>
    </Layout>
  )
}

export default Reviews
