import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Info from '../components/Info';
import Title from '../components/Title';

export const query = graphql`
  query {
    contactImg: file(relativePath:{eq:"headshots/headshot1.jpg"}){
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const contact = ({data}) => {
  return (
    <Layout>
      <div className="page">
        <Title
          title="CONTACT ME"
          subtitle="If you would like to work with me or have any questions, ..." />
        <Info reverse img={data.contactImg.childImageSharp.fluid}>
          <div className="info-contact">
            <h3 className="info-author">Heather Dick</h3>
            <p>email[at]email[dot]com</p>
          </div>
          {/* <div>
            <h3 className="info-author">Management Company</h3>
            <p>416-123-1234</p>
            <p>email[at]email[dot]com</p>
          </div> */}
        </Info>
      </div>
    </Layout>
  )
}

export default contact;
