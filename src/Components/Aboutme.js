import React from 'react'

export const Aboutme = ({data}) => {

  return (
    <section className="about-me">
      
      <div className="decoration-element">
        <div className="colored-line"></div>
        <div className="colored-circle"></div>
      </div>
      <p>
         {data.about.text}
      </p>
    </section>
  )
}