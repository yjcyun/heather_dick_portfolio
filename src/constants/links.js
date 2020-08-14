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
    text: 'testimonials',
    url: '/testimonials'
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
  {
    id: 7,
    text: 'credits',
    url: '/credits',
    footer: true
  },
];

const tempNavLinks = data.map(link => (
  <li key={link.id} style={{display:`${link.footer ?'none':''}`}}>
    <Link to={link.url}>{link.text}</Link>
  </li>
));

const footerNavLinks = data.map(link => (
  <li key={link.id}>
    <Link to={link.url}>{link.text}</Link>
  </li>
));

export default ({ styleClass, footer }) => (
  <ul className={`${styleClass}`}>{footer? footerNavLinks : tempNavLinks}</ul>
)