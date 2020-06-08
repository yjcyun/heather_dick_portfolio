import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Title from '../components/Title';
import ProductionsList from '../components/Productions/ProductionsList';

export const query = graphql`
  {
    posters: allStrapiProductions(sort: {fields: date, order: DESC}) {
      nodes {
        category
        company
        date(formatString: "MMM Do, YYYY")
        director
        id
        show
        img {
          childImageSharp {
            fluid {
              src
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
      <div className="page">
        <Title title="Productions" subtitle="A collection of Heather's production posters...any subtitle? quotes?" />
        <ProductionsList posters={posters} />
      </div>
    </Layout>
  )
}

export default Productions
