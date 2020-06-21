import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Bounce from 'react-reveal/Bounce';
import BannerSubtitle from './BannerSubtitle';

const Contact = ({ children, btnText, icon,title }) => {
  return (
    <ContactWrapper>
      <Bounce bottom duration={1000} >
        <BannerSubtitle icon={icon} title={title} />
        <div className="contact-container">
          {children}
          <Link to="/contact" className="about-btn-container">
            <button className="btn contact-btn">{btnText}</button>
          </Link>
        </div>
      </Bounce>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.div`
text-align:center;
.contact-container{
  margin-top:32px;
  margin-top: 2rem;
  padding:0 8px;
  padding: 0 0.5rem;
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

.margin-bottom{
  margin-bottom: 2rem;
}

.coaching-link {
  color: var(--mainPurple);
  -webkit-transition:var(--transition);
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
