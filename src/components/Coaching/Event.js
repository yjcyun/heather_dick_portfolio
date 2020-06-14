import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import BannerSubtitle from '../BannerSubtitle';
import horn from '../../images/horn.png';

const query = graphql`
  {
    allStrapiNotifications {
      nodes {
        notification
        id
        coaching
      }
    }
  }
`;

const Event = () => {
  const { allStrapiNotifications: { nodes } } = useStaticQuery(query);

  return (
    <EventWrapper>
      <div className="event-container">
        <BannerSubtitle icon={horn} title="what's upcoming?" />
        <div className="event-notification-wrapper">
          <div className="event-notification">
            {nodes.map(item => {
              if (item.coaching) {
                return (
                  <h4 key={item.id}>{item.notification}</h4>
                )
              }
            })}
          </div>
        </div>
      </div>

    </EventWrapper>
  )
}

const EventWrapper = styled.div`
text-align:center;
.event-container {
  margin: 6rem auto;
}

.event-notification-wrapper {
  filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
}

.event-notification{
  margin: 1rem auto;
  width: 90%;
  padding:2rem 1rem 10rem;
  clip-path: polygon(100% 0, 100% 100%, 50% 75%, 0% 100%, 0 50%, 0% 0%);
  background: var(--mainPurple);
}

.event-notification h4{
  color: white;
  margin: 0 auto;
  font-size:1.5rem;
  padding: 0 1rem;
}

.contact-container{
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

@media (min-width: 768px) {
.event-notification{
  margin: 1rem auto;
  width: 80%;
  padding:3rem;
  clip-path: polygon(100% 0, 95% 50%, 100% 100%, 0% 100%, 5% 50%, 0% 0%);
  background: var(--mainPurple);
}
}
`;

export default Event
