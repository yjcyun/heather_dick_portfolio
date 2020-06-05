import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import ResumeItem from './ResumeItem';

const query = graphql`
  {
    allStrapiResumes(sort: {fields: resume_scripts___year, order: DESC}) {
      nodes {
        resume_scripts {
          company
          role
          id
          title
          year
        }
        resume_productions {
          company
          id
          role
          year
          title
        }
      }
    }
  }
`
const ResumeList = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiResumes: { nodes }
  } = data;

  return (
    <ResumeWrapper>
      {/* single resume */}
      <h1>Scripts</h1>
      {nodes[0].resume_scripts.map(item => <ResumeItem key={item.id} item={item} />)}
      {/* end of single resume */}

      {/* single resume */}
      <h1>Productions</h1>
      {nodes[0].resume_productions.map(item => <ResumeItem key={item.id} item={item} />)}
      {/* end of single resume */}
    </ResumeWrapper>
  )


}

const ResumeWrapper = styled.section`

`;
export default ResumeList
