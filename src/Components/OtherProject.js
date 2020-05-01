import React from 'react'

export const OtherProject = ({link, title, subtitle, tags}) => (
  <div className="other-project-item">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <p>
          {title}
          <span className="no-formatting">
            {subtitle} 
          </span>
          >>
        </p>
      </a>

      <section className="all-tags">
        {tags.map((tag) => {
          return (
            <div className="tag" key={tag}>{tag}</div>
          )
        })}    
      </section>

  </div>

  )
