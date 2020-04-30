import React from 'react'
import LinkedIn from 'images/linkedin.svg'
import GitHub from 'images/github.svg'
import StackOverflow from 'images/stackoverflow.svg'
import ProfilePic from 'images/profilepic.png'
import { ContactItem } from './ContactItem'

export const Header = () => (
  <header>

    <section className="social-media-top">
      < ContactItem 
        className="small"
        Link="https://www.linkedin.com/in/malin-andersson-22261b190/"
        image={LinkedIn}
        alt="link to linked in"
      />

       < ContactItem 
        className="small"
        Link="https://github.com/malin798"
        image={GitHub}
        alt="link to github"
      />

       < ContactItem 
        className="small"
        Link="https://stackoverflow.com/users/12670065/malin-marie"
        image={StackOverflow}
        alt="stack overflow"
      />
    
    </section>

    <section className="text bold">

      <p>
        <span className="not-bold">
          Portfolio:
        </span> 
        MALIN ANDERSSON
      </p>

      <h1>frontend developer</h1>
      <h2>+ Communication skills</h2>

    </section>

    <img className="profile-image" src={ProfilePic} alt="profile"/>

  </header>
)
