import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from "@reach/router";

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDescription: description
        siteUrl
        defaultImage
        siteTitle: title
        twitterHandle
      }
    }
  }
`

const SEO = ({ title, description, image }) => {
  const { site } = useStaticQuery(query);
  const { pathname } = useLocation();
  console.log(pathname);
  const {
    siteDescription,
    siteTitle,
    siteUrl,
    defaultImage,
    twitterHandle
  } = site.siteMetadata;

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={title ? `${title} | ${siteTitle}` : `${siteTitle}`}>
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={image || defaultImage} />
      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || siteDescription} />
      <meta name="twitter:image" content={`${siteUrl}${image}` || `${siteUrl}${defaultImage}`} />
      {/* facebook card */}
      <meta property="og:url" content={`${siteUrl}${pathname}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title}` || `${siteTitle}`} />
      <meta property="og:description" content={`${description}` || `${siteDescription}`} />
      <meta property="og:image" content={`${siteUrl}${image}` || `${siteUrl}${defaultImage}`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
    </Helmet>
  )
}

export default SEO