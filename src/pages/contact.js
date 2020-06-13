import React from 'react';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Contact from '../components/Contact/Contact';

const contact = () => {
  return (
    <Layout>
      <div className="page">
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
