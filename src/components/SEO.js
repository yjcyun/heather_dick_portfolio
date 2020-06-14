import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDescription: description
        siteUrl
        image
        siteTitle: title
        twitterHandle
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query);
  const { siteDescription, siteTitle, siteUrl, image, twitterHandle } = site.siteMetadata;

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={image} />
      {/* twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SEO
