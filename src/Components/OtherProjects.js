import React from 'react'
import { OtherProject } from './OtherProject'

export const OtherProjects = () => {
  return (

    <section class="other-projects text-box">

          <h3 class="colored-text">OTHER PROJECTS</h3>

          <ul class="column-list left">
            < OtherProject 
              link="https://malins-survey.netlify.com/"
              title="Survey project."
              subtitle="Web app built in React "
              tags={[
                "HTML5",
                "CSS3",
                "React",
                "Javascript ES6"
              ]}
            />
            < OtherProject 
              link="https://admiring-tereshkova-e261c1.netlify.com/"
              title="Music releases."
              subtitle="Team project. Web app built in React using spotify API "
              tags={[
                "HTML5",
                "CSS3",
                "React",
                "Javascript ES6"
              ]}
            />
            < OtherProject 
              link="https://malins-project-happy-thoughts.netlify.com/"
              title="Happy thoughts."
              subtitle="Web app built in React using an API - fetching and posting "
              tags={[
                "HTML5",
                "CSS3",
                "React",
                "Javascript ES6"
              ]}
            />
            
          </ul>

        </section>

    
  )
}