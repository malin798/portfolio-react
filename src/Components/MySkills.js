import React from 'react'
import { SkillsListItem } from 'Components/SkillsListItem'

export const MySkills= () => (
  
    <section class="text-box background">
      
      <h3 class="orange-box">SKILLS</h3>

      <div class="skills">

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
