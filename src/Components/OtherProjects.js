import React from 'react'
import { OtherProject } from './OtherProject'

export const OtherProjects = () => {
  return (

    <section className="other-projects text-box">

          <h3 className="colored-text">OTHER PROJECTS</h3>

          <div className="other-project-list">
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
            
          </div>

        </section>

    
  )
}