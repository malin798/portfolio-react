import React from 'react'
import Image1 from 'images/featured-project-pizza-place.png'
import Image2 from 'images/featured-project-cluedo.png'
import Image3 from 'images/featured-project-weather-app.png'
import Image4 from 'images/featured-project-business-site.png'

import { FeaturedProject } from './FeaturedProject'

export const FeaturedProjects = () => {
  return (
    <section className="featured-projects">

      <h3>
        FEATURED PROJECTS
      </h3>

      <section className="featured-project">
        < FeaturedProject 
          key="1"
          link="https://malins-pizza-bot-project.netlify.com"
          image={Image1}
          alt="pizza bot project"
          title="PIZZA BOT."
          subtitle="Web app built in Javascript "
          tags={[
            "HTML5",
            "CSS3",
            "Javascript ES6"
          ]} 
        />
        < FeaturedProject 
          key="2"
          link="https://malins-project-clue.netlify.com/"
          image={Image2}
          alt="Cluedo project"
          title="CLUEDO."
          subtitle="Web app built in Javascript "
          tags={[
            "HTML5",
            "CSS3",
            "Javascript ES6"
          ]} 
        />
        < FeaturedProject 
          key="3"
          link="https://malins-weather-app.netlify.com/"
          image={Image3}
          alt="Weather App project"
          title="WEATHER APP."
          subtitle="Web app built in Javascript using open weather API "
          tags={[
            "HTML5",
            "CSS3",
            "Javascript ES6",
            "API"
          ]} 
        />
        < FeaturedProject 
          key="4"
          link="https://malins-business-site.netlify.com/"
          image={Image4}
          alt="Business site project"
          title="BUSINESS SITE."
          subtitle="Web app built in Javascript "
          tags={[
            "HTML5",
            "CSS3",
            "Javascript ES6"
          ]} 
        />
      </section>
    </section>
  )
}