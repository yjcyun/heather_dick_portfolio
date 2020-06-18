import React from 'react';
import { FaTwitterSquare, FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';
import { IoIosGlobe } from 'react-icons/io';


const data = [
  {
    id: 1,
    footerIcon: <IoIosGlobe className="footer-icon" />,
    url: 'https://www.linkedin.com',
    text: "www.website.com"
  },
  {
    id: 2,
    footerIcon: <FaTwitterSquare className="footer-icon" />,
    url: 'https://www.linkedin.com',
    text: "Twitter"
  },
  {
    id: 3,
    footerIcon: <FaInstagramSquare className="footer-icon" />,
    url: 'https://www.linkedin.com',
    text: "Instagram"
  },
  {
    id: 4,
    footerIcon: <FaFacebookSquare className="footer-icon" />,
    url: 'https://www.linkedin.com',
    text: "Facebook"
  },
];

const footerLinks = data.map(link => (
  <li key={link.id}>
    <a href={link.url}>
      {link.footerIcon} {link.text}
    </a>
  </li>
));

export default ({ styleClass }) => (
  <ul className={`${styleClass}`}>{footerLinks}</ul>
);