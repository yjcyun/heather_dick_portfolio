import React from 'react';
import styled from 'styled-components';

const ResumeItem = ({ item, categories }) => {
  const { company, show, role } = item;

  

  return (
    <div>
      <h3>{company} | {show} | {role}</h3>
    </div>

  )
}

export default ResumeItem
