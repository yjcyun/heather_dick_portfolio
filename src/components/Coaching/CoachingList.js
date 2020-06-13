import React from 'react';
import styled from 'styled-components';
import CoachingItem from './CoachingItem';
import { graphql, useStaticQuery, Link } from 'gatsby';

const query = graphql`
  {
    coaching:allStrapiCoachings {
      nodes {
        category
        id
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
      }
    }
  }
`

const CoachingList = () => {
  const data = useStaticQuery(query);
  return (
    <CoachingListWrapper>
      <div className="coaching-container">
        {data.coaching.nodes.map(item => {
          return (
           <CoachingItem key={item.id} image={item.image.childImageSharp.fluid} desc={item.description} title={item.title}/>
          )
        })}
      </div>
      <div className="contact-container">
        <h4 className="coaching-contact">Do you need help with your upcoming theatre/vocal project?</h4>
        <h4 className="coaching-contact strong">Contact Heather and she will guide you to the right direction.</h4>

        <Link to="/contact">
          <button className="btn">send your questions</button>
        </Link>
      </div>
    </CoachingListWrapper>
  )
}

const CoachingListWrapper = styled.section`
.coaching-container{
background-color: #f8f6f1;
background-image: url("https://www.transparenttextures.com/patterns/subtle-dark-vertical.png");
padding: 0 1rem 2rem;
}

.contact-container{
  text-align:center;
  margin-top: 2rem;
}

.coaching-contact {
  margin:0.5rem 0;
  font-weight: 400;
  font-size: 1.5rem;
}

.coaching-contact.strong{
  font-weight: bold;
  margin-bottom: 2rem;
}

.coaching-link {
  color: var(--mainPurple);
  transition: var(--transition);
}

.coaching-link:hover {
  box-shadow:0 4px var(--mainGold);
}

@media (max-width: 768px) {
  .coaching-contact{
    padding: 0 1rem;
    font-size: 90%;
  }
}
`;

export default CoachingList
