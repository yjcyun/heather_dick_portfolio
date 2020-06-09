import React from 'react';
import styled from 'styled-components';
import CoachingItem from './CoachingItem';
import { graphql, useStaticQuery, Link } from 'gatsby';

const getImage = graphql`
  query {
    defaultBcg:file(relativePath: {eq: "carousel-3.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
   secondBcg:file(relativePath: {eq: "carousel-2.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const CoachingList = () => {
  const data = useStaticQuery(getImage);
  const image1 = data.defaultBcg.childImageSharp.fluid;
  const image2 = data.secondBcg.childImageSharp.fluid;

  return (
    <CoachingListWrapper>
      <CoachingItem
        image={image1}
        title="Acting Coaching"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, officiis debitis. Veritatis ipsam dolor, molestias quasi earum cum nostrum incidunt harum soluta quo, hic expedita aspernatur nam accusantium nobis ad laudantium molestiae, sequi beatae! Cumque quos minima quod officiis consequatur nulla, molestiae voluptate voluptas mollitia provident, molestias dicta asperiores blanditiis."
      />

      <CoachingItem
        image={image2}
        title="Voice Coaching"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, officiis debitis. Veritatis ipsam dolor, molestias quasi earum cum nostrum incidunt harum soluta quo, hic expedita aspernatur nam accusantium nobis ad laudantium molestiae, sequi beatae! Cumque quos minima quod officiis consequatur nulla, molestiae voluptate voluptas mollitia provident, molestias dicta asperiores blanditiis."
      />
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
