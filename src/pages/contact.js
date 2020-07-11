import React from 'react';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Contact from '../components/Contact/Contact';
import SEO from '../components/SEO';

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="Contact Heather Dick and the Sirius Theatrical Company for more information on acting and voice classes, a full resume & booking." />
      <div className="about-page">
        <Title page="contact"/>
        <Contact />
      </div>
    </Layout>
  )
}

export default contact;
