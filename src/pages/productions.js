import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Title from '../components/Title';
import ProductionsList from '../components/Productions/ProductionsList';
import SEO from '../components/SEO';
import Contact from '../components/Contact';
import medal from '../images/medal.png';

export const query = graphql`
  {
    posters: allStrapiProductions(sort: {fields: date, order: DESC}) {
      nodes {
        category
        company
        date(formatString: "MMM Do, YYYY")
        director
        id
        role
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
        <Title title="Productions" subtitle="Any subtitle on this page? quote?" />
        <ProductionsList posters={posters} />
        <Contact icon={medal} title="Work With Heather!" btnText="send email">
          <h4 className="coaching-contact margin-bottom">Contact Heather if you'd like to work with her</h4>
        </Contact>
      </div>
    </Layout>
  )
}

export default Productions
