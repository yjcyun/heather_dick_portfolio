import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import ResumeItem from './ResumeItem';

const query = graphql`
 {
    allStrapiResumes {
      nodes {
        id
        role
        show
        category
        company
      }
    }
  }
`

// get unique cateogories
const getCategories = items => {
  let tempItems = items.map(item => {
    return item.category;
  });
  console.log(tempItems);
  let tempCategories = new Set(tempItems);
  let categories = Array.from(tempCategories);
  categories = ['all', ...categories];
  
  return categories;
}

const ResumeList = () => {
  const { allStrapiResumes: { nodes } } = useStaticQuery(query);

  const [categories] = useState(getCategories(nodes));


  const renderList = nodes.map(item => {
    console.log(item.category);
    return (
      <>
        <h3>{item.category}</h3>
        <ResumeItem key={item.id} item={item} categories={categories} />
      </>
    )
  });

  return (
    <ResumeWrapper>

      {renderList}
    </ResumeWrapper>
  )


}

const ResumeWrapper = styled.section`

`;
export default ResumeList
