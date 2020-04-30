import React from 'react'

export const ContactItem = ({className, link, image, alt, title}) => (

  <div className="social-media-item-container">

    <a className={`social-media-item ${className}`} href={link} target="_blank"> 
      <img src={image} alt={alt}/>
    </a>

    {title && 
      <p class="bold">
        {title}
      </p>
    }

  </div>

)