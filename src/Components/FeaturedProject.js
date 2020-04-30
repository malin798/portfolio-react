import React from 'react'
// import Image1 from 'images/featured-project-pizza-place.png'
// import Image2 from 'images/featured-project-cluedo.png'
// import Image3 from 'images/featured-project-weather-app.png'
// import Image4 from 'images/featured-project-business-site.png'

export const FeaturedProject = ({ className = "", link, image, alt, title, subtitle, tags }) => {
  return (
    
    <div className={`featured-project-item ${className}`}>

      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={alt} className="image"></img>
        <p>
          <span className="colored-text bold">
            {title}
          </span> {subtitle} 
          <span className="colored-text underline bold">
            >>
          </span> 
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