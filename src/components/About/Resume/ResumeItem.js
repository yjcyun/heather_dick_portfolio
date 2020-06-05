import React from 'react'

const ResumeItem = ({ item }) => {
  const { company, year, title, role } = item;

  return (
    <div>
      <h3>{company} | {title} | {year}</h3>
      <h4>{role}</h4>
    </div>

  )
}

export default ResumeItem
