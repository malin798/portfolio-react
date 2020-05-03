import React from 'react'

import { FeaturedProject } from './FeaturedProject'

export const FeaturedProjects = ({data}) => {
  return (
    <section className="featured-projects">

      <h3>FEATURED PROJECTS</h3>

      <section className="featured-project">

        {data.featured_projects.map((item) => {
          return (
            < FeaturedProject 
            key={item.title}
            link={item.link}
            image={item.image}
            alt={item.alt}
            title={item.title}
            subtitle={item.description}
            tags={item.tags}
            />
          )
        })}
      
      </section>
    </section>
  )
}