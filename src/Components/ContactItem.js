import React from 'react'

export const ContactItem = ({link, image, alt, title}) => (

  <li>

    <a className="social-media big" href={link} target="_blank"> 
      <img src={image} alt={alt}/>
    </a>

    <p class="bold">
      {title}
    </p>

  </li>

)