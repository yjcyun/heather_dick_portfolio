import React from 'react';
import { Link } from 'gatsby';

const data = [
  {
    id: 1,
    text: 'home',
    url: '/'
  },
  {
    id: 2,
    text: 'about',
    url: '/about'
  },
  {
    id: 3,
    text: 'resume',
    url: '/resume'
  },
  {
    id: 4,
    text: 'blog',
    url: '/blog'
  },
];

const tempNavLinks = data.map(link => (
  <li key={key.id}>
    <Link to={link.url}>{link.text}</Link>
  </li>
));

export default ({ styleClass }) => (
  <ul className={`${styleClass}`}>{tempNavLinks}</ul>
)