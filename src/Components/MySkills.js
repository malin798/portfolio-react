import React from 'react'
import { SkillsListItem } from 'Components/SkillsListItem'

export const MySkills= ({data}) => (
  
    <section className="skills-section">
      
      <h3>SKILLS</h3>

      <div className="skills">

        {data.skills.map((item) => {
          return (
            < SkillsListItem 
              title={item.title}
              skills={item.skills}
            />
          )
        })}

      </div>
    </section>

)
