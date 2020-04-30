import React from 'react'

export const OtherProject = ({link, title, subtitle, tags}) => (
  <div className="other-project-item">
      <a href={link} target="_blank">
        <p>

          <span className="colored-text bold">
            {title}
          </span> 

          {subtitle} 

          <span className="colored-text bold">
            >>
          </span>

        </p>
      </a>

      <section className="all-tags">
        {tags.map((tag) => {
          return (
            <div className="tag">{tag}</div>
          )
        })}    
      </section>

  </div>

  )
