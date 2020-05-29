import React from 'react';
import { graphql,useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const getImage = graphql`
  query {
    defaultBcg:file(relativePath: {eq: "defaultImg.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const StyledHero = ({img, className,children}) => {
  const data = useStaticQuery(getImage);
  return (
    <>
      <BackgroundImage
        className={className}
        fluid={img || data.defaultBcg.childImageSharp.fluid}
      >
        {children}
      </BackgroundImage>
    </>
  )
}


export default styled(StyledHero)`
  min-height: 50vh;
  background-position: center;
  background-size: cover;
`;
