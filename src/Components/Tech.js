import React from 'react'

export const Tech = ({data}) => {
  return (

    <section className="tech-section">
      <h3>{data.tech_section.title}</h3>
      <p>{data.tech_section.description}</p>
    </section>
    
  )
}