import React from 'react'
import { OtherProject } from './OtherProject'

export const OtherProjects = ({data}) => {
  return (

    <section className="other-projects">

          <h3>OTHER PROJECTS</h3>

          <div className="other-project-list">
            {data.other_projects.map((item) => {
              return (
                < OtherProject 
                  key={item.title}
                  link={item.link}
                  title={item.title}
                  subtitle={item.description}
                  tags={item.tags}
                />
              )
            })}        
            
          </div>

        </section>

    
  )
}