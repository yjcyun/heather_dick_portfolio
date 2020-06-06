import React from 'react';
import styled from 'styled-components';
import CoachingItem from './CoachingItem';
import { graphql, useStaticQuery,Link } from 'gatsby';

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
      <hr />
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
      <hr style={{marginTop:'2rem'}}/>
      <h2 className="coaching-contact">If you would like to work with me, do not hesitate to 
      <Link to="/contact" className="coaching-link">contact me</Link>.
      </h2>
    </CoachingListWrapper>
  )
}

const CoachingListWrapper = styled.section`
.coaching-contact {
  text-align: center;
  margin: 2rem 0;
}

.coaching-link {
  color: var(--mainPurple);
  transition: var(--transition);
  margin-left: 0.7rem;
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
