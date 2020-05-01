import React from 'react'
import { SkillsListItem } from 'Components/SkillsListItem'

export const MySkills= () => (
  
    <section className="skills-section">
      
      <h3>SKILLS</h3>

      <div className="skills">

          < SkillsListItem 
            title="CODE"
            skills={[
              "Javascript",
              "React",
              "Redux",
              "ES6",
              "React Native",
              "HTML5",
              "SCSS",
              "CSS",
              "Flexbox",
              "Node.js"
            ]}/>

          < SkillsListItem 
            title="TOOLBOX"
            skills={[
              "Visual Studio Code",
              "Postman",
              "Github",
              "Netlify",
              "Android Studio",
            ]}/>

          < SkillsListItem 
            title="MORE"
            skills={[
              "Customer Care",
              "Structure",
              "Remote work",
              "Mob and pair programming",
              "Agile methodology",
            ]}/>
          
      </div>
    </section>

)
