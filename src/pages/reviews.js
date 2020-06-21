import React from 'react';
import Layout from '../components/Layout';
import Title from '../components/Title';
import ReviewList from '../components/Reviews/ReviewList';
import SEO from '../components/SEO';
import clap from '../images/clap.png';
import Contact from '../components/Contact';

const Reviews = () => {
  return (
    <Layout>
      <SEO title="Reviews" description="Testimonials from clients, performers & directors Heather Dick has worked with over the years. Also, quotes from professional reviews of notable shows either starred in or directed by Heather Dick."/>
      <div className="page">
        <Title
          title="Reviews & Testimonials"
          subtitle="See what Heather's students and press are saying about her work"
        />
        <ReviewList />
        <Contact icon={clap} btnText="Contact Heather" title="Send your reviews"></Contact>
      </div>
    </Layout>
  )
}

export default Reviews
