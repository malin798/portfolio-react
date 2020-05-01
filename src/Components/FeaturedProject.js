import React from 'react'
// import Image1 from 'images/featured-project-pizza-place.png'
// import Image2 from 'images/featured-project-cluedo.png'
// import Image3 from 'images/featured-project-weather-app.png'
// import Image4 from 'images/featured-project-business-site.png'

export const FeaturedProject = ({link, image, alt, title, subtitle, tags }) => {
  return (
    
    <div className="featured-project-item">

      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={alt} className="image"></img>
        <p>
          {title}
          <span className="no-formatting">
            {subtitle} 
          </span>
          >>
        </p>
      </a>
      
      <section className="all-tags">
        {tags.map((tag) => {
          return (
          <div className="tag" key={tag}>{tag}</div>
          )
        })}
      </section>

    </div>
  )
}