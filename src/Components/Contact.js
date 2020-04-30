import React from 'react'
import { ContactItem } from 'Components/ContactItem'
import Linkedin from 'images/linkedin-color.svg'
import Github from 'images/github-color.svg'
import StackOverflow from 'images/stack-color.svg'

export const Contact = () => {
  return (
    <section class="text-box">

      <h3 class="orange-box">FOR MORE</h3>

      <ul class="social-media-bottom colored-text">

        < ContactItem 
          Link="https://www.linkedin.com/in/malin-andersson-22261b190/"
          image={Linkedin}
          alt="link to linked in"
          title="LINKED IN"
        />

        < ContactItem 
          Link="https://github.com/malin798"
          image={Github}
          alt="link to github"
          title="GITHUB"
        />

        < ContactItem 
          Link="https://stackoverflow.com/users/12670065/malin-marie"
          image={StackOverflow}
          alt="link to stackoverflow"
          title="STACK OVERFLOW"
        />

      </ul>
    </section>
    )
    }