import React from 'react';
import Layout from '../components/Layout';
import Info from '../components/Info';
import Title from '../components/Title';

const contact = () => {
  return (
    <Layout>
      <div className="page-height page-margin" >
        <Info>
          <Title 
          title="contact me" 
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reprehenderit."/>
          <div className="info-contact">
            <h3 className="info-author">Heather Dick</h3>
            <p>email[at]email[dot]com</p>
          </div>
          <div>
            <h3 className="info-author">Management Company</h3>
            <p>416-123-1234</p>
            <p>email[at]email[dot]com</p>
          </div>
        </Info>
      </div>
    </Layout>
  )
}

export default contact;
