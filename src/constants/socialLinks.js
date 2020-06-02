import React from 'react';
import { FaLinkedin, FaTwitterSquare, FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon" />,
    url: 'https://www.linkedin.com',
    text: "LinkedIn"
  },
  {
    id: 2,
    icon: <FaTwitterSquare className="social-icon" />,
    url: 'https://www.linkedin.com',
    text: "Twiiter"
  },
  {
    id: 3,
    icon: <FaInstagramSquare className="social-icon" />,
    url: 'https://www.linkedin.com',
    text: "Instagram"
  },
  {
    id: 4,
    icon: <FaFacebookSquare className="social-icon" />,
    url: 'https://www.linkedin.com',
    text: "Facebook"
  }
];

const links = data.map(link => (
  <li key={link.id}>
    <a href={link.url}>
      {link.icon} {link.text}
    </a>
  </li>
));

export default ({ styleClass }) => (
  <ul className={`${styleClass}`}>{links}</ul>
);