import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import ResumeItem from './ResumeItem';
import ResumeFeatured from './ResumeFeatured';
import img1 from '../../../images/carousel-1.jpg';
import img2 from '../../../images/carousel-2.jpg';
import img3 from '../../../images/carousel-3.jpg';
import Subtitle from '../../Subtitle';

const query = graphql`
 {
    allStrapiResumes {
      nodes {
        id
        role
        show
        category
        company
        location
        names
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
  const [categories, setCategories] = useState(getCategories(nodes));

  const renderList = (categoryResume) => nodes.map(item => {
    if (item.category === categoryResume) {
      return <ResumeItem key={item.id} item={item} />
    }
  });

  return (
    <ResumeWrapper>
      <div className="max-width"> 
        <Subtitle subtitle="SELECTED CREDITS" />
        <div className="resume-column">
          <div className="resume-content">
            {
              categories.map((item, index) => {
                return (
                  <div key={index} className="resume-item">
                    <h1 className="resume-category">
                      {item === 'film' ? 'film&televsion' : item}
                    </h1>
                    {renderList(item)}
                  </div>
                )
              })}
          </div>
          <div className="resume-featured">
            <ResumeFeatured />
          </div>
          
        </div>

        <Link to="/contact">
          <button className="btn about-btn">contact for full resume</button>
        </Link>
      </div>
    </ResumeWrapper>
  )
}

const ResumeWrapper = styled.section`
padding: 5rem 7rem;
 margin:0 auto;

.resume-column{
  display:flex;
}
.resume-img{
  margin-top: 1rem;
  flex:1;
}
.resume-img img {
  margin: 0.5rem 0;
}
.resume-content{
 flex:5;
}
.resume-featured{
  flex:2;
}
.resume-item{
  padding: 1.5rem 0;
}

.resume-category{
  text-transform: uppercase;
  margin: 1rem 0;
  letter-spacing: 0.1rem;
}
`;

export default ResumeList
