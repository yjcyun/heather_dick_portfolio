import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Title from '../components/Title';
import ProductionsList from '../components/Productions/ProductionsList';
import SEO from '../components/SEO';
import Contact from '../components/Contact';
import spotlight from '../images/spotlight.png';

export const query = graphql`
 {
    posters:allStrapiProductions(sort: {fields: created_at, order: DESC}) {
      nodes {
        id
        description
        created_at
        category
        show
        img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Productions = ({
  data: { posters: { nodes: posters } }
}) => {
  return (
    <Layout>
      <SEO title="Productions" description="Productions page" />
      <div className="page">
        <Title page="productions" />
        <ProductionsList posters={posters} />
        <Contact icon={spotlight} title="Work With Heather!" btnText="send email">
          <h4 className="coaching-contact margin-bottom">Send an email if you’d like to work with me.</h4>
        </Contact>
      </div>
    </Layout>
  )
}

export default Productions