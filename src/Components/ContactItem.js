import React from 'react'

export const ContactItem = ({className, link, image, alt, title}) => (

  <div className="social-media-item-container">

    <a className={`social-media-item ${className}`} href={link} target="_blank" rel="noopener noreferrer"> 
      <img src={image} alt={alt}/>
    </a>

    {title && 
      <p className="bold">
        {title}
      </p>
    }

  </div>

)