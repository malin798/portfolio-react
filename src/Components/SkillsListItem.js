import React from 'react'

export const SkillsListItem= ({title, skills}) => (

  <div className="skill-list">
    <p className="colored-text bold"> 
      {title}
    </p> 

    <ul>
    {skills.map((skill) => (

      <li key={skill}>
        {skill}
      </li>

    ))}
    </ul> 

  </div> 
)
