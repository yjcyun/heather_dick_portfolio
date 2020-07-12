import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { FaAsterisk } from 'react-icons/fa';
import styled from 'styled-components';
import horn from '../../images/horn.png';
import Bounce from 'react-reveal/Bounce';
import BannerSubtitle from '../BannerSubtitle';

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
        <Bounce bottom duration={1000}>
          <BannerSubtitle icon={horn} title="what's upcoming?" />
          <div className="event-notification-wrapper">
            <div className="event-notification">
              {nodes.map(item => (
                item.coaching
                  ? <h4 key={item.id}><FaAsterisk /> {item.notification}</h4>
                  : <h4 key={item.id}>Private coaching for monologue and audition preparation is available year round.</h4>
              ))}
            </div>
          </div>
        </Bounce>
      </div>
    </EventWrapper>
  )
}

const EventWrapper = styled.div`
text-align:center;
.event-container {
  margin:96px auto;
  margin: 6rem auto;
}

.event-notification-wrapper {
  -webkit-filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
  filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
}

.event-notification{
  margin:16px auto;
  margin: 1rem auto;
  width: 90%;
  padding:32px 16px 160px;
  padding:2rem 1rem 10rem;
  -webkit-clip-path: polygon(100% 0, 100% 100%, 50% 75%, 0% 100%, 0 50%, 0% 0%);
  clip-path: polygon(100% 0, 100% 100%, 50% 75%, 0% 100%, 0 50%, 0% 0%);
  background: var(--darkPurple);
}

.event-notification h4{
  color: white;
  margin: 0 auto 0.5rem;
  font-size:24px;
  font-size:1.5rem;
  padding:0 16px;
  padding: 0 1rem;
  font-weight: normal;
}

.contact-container{
  margin-top:32px;
  margin-top: 2rem;
}

.coaching-contact {
  margin:8px 0;
  margin:0.5rem 0;
  font-weight: 400;
  font-size:24px;
  font-size: 1.5rem;
}

.coaching-contact.strong{
  font-weight: bold;
  margin-bottom:32px;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .event-notification{
    margin: 1rem auto;
    width: 80%;
    padding:3rem;
    -webkit-clip-path: polygon(100% 0, 95% 50%, 100% 100%, 0% 100%, 5% 50%, 0% 0%);
    clip-path: polygon(100% 0, 95% 50%, 100% 100%, 0% 100%, 5% 50%, 0% 0%);
  }
}
`;

export default Event