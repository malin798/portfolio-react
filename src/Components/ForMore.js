import React from 'react'
import { ContactItem } from 'Components/ContactItem'
import Linkedin from 'images/linkedin-color.svg'
import Github from 'images/github-color.svg'
import StackOverflow from 'images/stack-color.svg'

export const ForMore = () => {
  return (
    <section className="for-more">

      <h3>FOR MORE</h3>

      <div className="social-media-bottom">

        < ContactItem 
          className="big"
          link="https://www.linkedin.com/in/malin-andersson-22261b190/"
          image={Linkedin}
          alt="link to linked in"
          title="LINKED IN"
        />

        < ContactItem 
          className="big"
          link="https://github.com/malin798"
          image={Github}
          alt="link to github"
          title="GITHUB"
        />

        < ContactItem 
          className="big"
          link="https://stackoverflow.com/users/12670065/malin-marie"
          image={StackOverflow}
          alt="link to stackoverflow"
          title="STACK OVERFLOW"
        />

      </div>
    </section>
    )
    }