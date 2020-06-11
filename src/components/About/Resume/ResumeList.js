import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import ResumeItem from './ResumeItem';
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
        <Subtitle subtitle="BEST WORK" />
        <div className="resume-column">
          <div className="resume-content">
            {categories.map((item, index) => (
              <div key={index} className="resume-item">
                <h1 className="resume-category">{item}</h1>
                {renderList(item)}
              </div>
            ))}
          </div>
          <div className="resume-img">
            <img src={img1} alt="Heather resume" />
            <img src={img2} alt="Heather resume" />
            <img src={img3} alt="Heather resume" />
          </div>
        </div>

        <Link to="/contact">
          <button className="btn about-btn">contact for full resume</button>
        </Link>
      </>
    </ResumeWrapper>
  )
}

const ResumeWrapper = styled.section`
padding: 0 5rem;
 margin:5rem auto 2rem;
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
 flex:3;
}
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
