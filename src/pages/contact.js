import React from 'react';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Contact from '../components/Contact/Contact';
import SEO from '../components/SEO';

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="Contact Page" />
      <div className="page contact-page">
        <Title
          title="CONTACT"
          subtitle="If you would like to work with Heather or have any questions, reach out to her via email or social media."
        />
        <Contact />
      </div>
    </Layout>
  )
}

export default contact;
