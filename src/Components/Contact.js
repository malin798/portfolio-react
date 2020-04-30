import React from 'react'
import { ContactItem } from 'Components/ContactItem'
import Linkedin from 'images/linkedin-color.svg'
import Github from 'images/github-color.svg'
import StackOverflow from 'images/stack-color.svg'

export const Contact = () => {
  return (
    <section className="text-box">

      <h3 className="orange-box">FOR MORE</h3>

      <div className="social-media-bottom colored-text">

        < ContactItem 
          className="big"
          Link="https://www.linkedin.com/in/malin-andersson-22261b190/"
          image={Linkedin}
          alt="link to linked in"
          title="LINKED IN"
        />

        < ContactItem 
          className="big"
          Link="https://github.com/malin798"
          image={Github}
          alt="link to github"
          title="GITHUB"
        />

        < ContactItem 
          className="big"
          Link="https://stackoverflow.com/users/12670065/malin-marie"
          image={StackOverflow}
          alt="link to stackoverflow"
          title="STACK OVERFLOW"
        />

      </div>
    </section>
    )
    }