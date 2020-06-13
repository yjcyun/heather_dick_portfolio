import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import BannerSubtitle from '../BannerSubtitle';
import question from '../../images/question.png';

const Contact = () => {
  return (
    <ContactWrapper>
      <BannerSubtitle icon={question} title="Have any questions?" />
      <div className="contact-container">
        <h4 className="coaching-contact">Do you need help with your upcoming theatre/vocal project?</h4>
        <h4 className="coaching-contact strong">Contact Heather and she will guide you to the right direction.</h4>

        <Link to="/contact">
          <button className="btn">send your questions</button>
        </Link>
      </div>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.div`
text-align:center;

.contact-container{
  margin-top: 2rem;
  padding: 0 0.5rem;
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
  padding-top:5rem;

  .contact-container{
  margin: 3rem auto;
  padding:0 4rem;
  }

  .coaching-contact{
    padding: 0 1rem;
  }

  .coaching-contact.strong{
  margin-bottom: 4rem;
  }
}
`;

export default Contact
