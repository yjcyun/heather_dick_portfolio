import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
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
  let tempCategories = new Set(tempItems);
  let categories = Array.from(tempCategories);
  categories = [...categories];

  return categories;
}

const ResumeList = () => {
  const { allStrapiResumes: { nodes } } = useStaticQuery(query);
  // array of unique categories
  const [categories] = useState(getCategories(nodes));

  const renderList = (categoryResume) => nodes.map(item => {
    if (item.category === categoryResume) {
      return <ResumeItem key={item.id} item={item} />
    }
  });

  return (
    <ResumeWrapper>
      <>
        {categories.map((item, index) => (
          <div key={index} className="resume-item">
            <h1 className="resume-category">{item}</h1>
            {renderList(item)}
          </div>
        ))}
        <Link to="/contact">
          <button className="btn about-btn">contact for full resume</button>
        </Link>
      </>
    </ResumeWrapper>
  )
}

const ResumeWrapper = styled.section`
padding: 0 5rem;
.resume-item{
  padding-bottom: 1rem;
}

.resume-category{
  text-transform: uppercase;
  margin: 1rem 0;
  letter-spacing: 0.1rem;
}
`;

export default ResumeList
