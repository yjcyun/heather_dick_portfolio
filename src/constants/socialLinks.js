import React from 'react';
import { FaLinkedin, FaTwitterSquare, FaInstagramSquare, FaFacebookSquare, FaLinkedinIn, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const data = [
  {
    id: 1,
    footerIcon: <FaLinkedin className="footer-icon" />,
    icon: <FaLinkedinIn className="social-icon" />,
    url: 'https://www.linkedin.com/in/heatherdick',
    text: "LinkedIn"
  },
  {
    id: 2,
    footerIcon: <FaTwitterSquare className="footer-icon" />,
    icon: <FaTwitter className="social-icon" />,
    url: 'https://twitter.com/Sirius_Theatre',
    text: "Twitter"
  },
  {
    id: 3,
    footerIcon: <FaInstagramSquare className="footer-icon" />,
    icon: <FaInstagram className="social-icon" />,
    url: 'https://www.instagram.com/siriustheatrical',
    text: "Instagram"
  },
  {
    id: 4,
    footerIcon: <FaFacebookSquare className="footer-icon" />,
    icon: <FaFacebook className="social-icon" />,
    url: 'https://www.facebook.com/SiriusTheatrical',
    text: "Facebook"
  },
];

const links = data.map(link => (
  <li key={link.id}>
    <a href={link.url}>
      {link.icon}
    </a>
  </li>
));

const footerLinks = data.map(link => (
  <li key={link.id}>
    <a href={link.url}>
      {link.footerIcon} {link.text}
    </a>
  </li>
));

export default ({ styleClass, footer }) => (
  <ul className={`${styleClass}`}>{footer ? footerLinks : links}</ul>
);