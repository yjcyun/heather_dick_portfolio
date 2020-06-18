import React from 'react';
import { Link } from 'gatsby';

const data = [
  {
    id: 1,
    text: 'bio',
    url: '/bio'
  },
  {
    id: 2,
    text: 'coaching',
    url: '/coaching'
  },
  {
    id: 3,
    text: 'productions',
    url: '/productions'
  },
  {
    id: 4,
    text: 'reviews',
    url: '/reviews'
  },
  {
    id: 5,
    text: 'blog',
    url: '/blog'
  },
  {
    id: 6,
    text: 'contact',
    url: '/contact'
  },
];

const tempNavLinks = data.map(link => (
  <li key={link.id}>
    <Link to={link.url}>{link.text}</Link>
  </li>
));

export default ({ styleClass }) => (
  <ul className={`${styleClass}`}>{tempNavLinks}</ul>
)