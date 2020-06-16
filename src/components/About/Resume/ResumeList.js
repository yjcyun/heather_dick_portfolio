import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import Obfuscate from 'react-obfuscate';
import ResumeItem from './ResumeItem';
import ResumeFeatured from './ResumeFeatured';
import Subtitle from '../../Subtitle';
import Brush from '../../../images/brush.svg';

const query = graphql`
 {
    resumes:allStrapiResumes {
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
    notifications:allStrapiNotifications {
      nodes {
        notification
        id
      }
    }
  }
`;

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
  const { resumes: { nodes: resume }, notifications: { nodes: notification }} = useStaticQuery(query);

  // array of unique categories
  const [categories] = useState(getCategories(resume));

  const renderList = (categoryResume) => resume.map(item => {
    if (item.category === categoryResume) {
      return <ResumeItem key={item.id} item={item} />
    }
    return;
  });

  return (
    <ResumeWrapper>
      <div className="max-width">
        <Subtitle subtitle="SELECTED CREDITS" credits />
        <div className="resume-column">
          <div className="resume-content">
              {categories.map((item, index) => {
                  return (
                    <div key={index} className="resume-item">
                      <h1 className="resume-category">
                        {item === 'film' ? 'film&televsion' : item}
                      </h1>
                      {renderList(item)}
                    </div>
                  )
                })}
            <Obfuscate email="info@heatherdick.com" aria-label="Email Me" className="about-btn-container">
              <button className="btn about-btn">contact for full resume</button>
            </Obfuscate>
          </div>
          <div className="resume-featured">
            <ResumeFeatured notification={notification} />
          </div>
        </div>
      </div>
    </ResumeWrapper>
  )
}

const ResumeWrapper = styled.section`
padding: 3rem 1rem;
margin:3rem auto;

.resume-column{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
}

.resume-content{
 -webkit-box-flex:1;
     -ms-flex:1;
         flex:1;
 display:-webkit-box;
 display:-ms-flexbox;
 display:flex;
 -webkit-box-orient:vertical;
 -webkit-box-direction:normal;
     -ms-flex-direction:column;
         flex-direction:column;
}

.resume-featured{
  -webkit-box-flex:1;
      -ms-flex:1;
          flex:1;
}

.resume-item{
  padding: 24px 0;
  padding: 1.5rem 0;
}

.resume-category{
  text-transform: uppercase;
  margin: 16px 0;
  margin: 1rem 0;
  letter-spacing: 1.6px;
  letter-spacing: 0.1rem;
  display:inline-block;
  /* background: url(${Brush});
  background-size: cover;
  background-position:center; */
  color: var(--lighterPurple);
}

.about-btn-container {
  margin: 48px 0;
  margin: 3rem 0;
  text-align:center;
}

@media (min-width: 768px){
  .resume-column{
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
        -ms-flex-direction:row;
            flex-direction:row;
  }

  .resume-content{
  -webkit-box-flex:3;
      -ms-flex:3;
          flex:3;
  padding-right: 1rem;
  }

  .resume-featured{
    -webkit-box-flex:1;
        -ms-flex:1;
            flex:1;
  }

  .about-btn-container {
    margin: 3rem 0;
    text-align:left;
  }
}

@media (min-width: 996px){
  padding: 7rem;
  margin:0 auto;
}

@media(min-width: 1024px){
  padding: 7rem 2rem;
}
`;

export default ResumeList