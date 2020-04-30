import React from 'react'

export const OtherProject = ({link, title, subtitle, tags}) => (
  <li>
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

    <section className="project-tags">
      {tags.map((tag) => {
        return (
          <div className="tags">{tag}</div>
        )
      })}
          
    </section>
  </li>
)
