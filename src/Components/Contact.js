import React from 'react'
import Linkedin from 'images/linkedin-color.svg'
import Github from 'images/github-color.svg'
import StackOverflow from 'images/stack-color.svg'

export const Contact = () => {
  return (
    <section class="text-box">

      <h3 class="orange-box">FOR MORE</h3>

      <ul class="social-media-bottom colored-text">

        <li>
          <a class="social-media big" href="https://www.linkedin.com/in/malin-andersson-22261b190/" target="_blank"> 
            <img src={Linkedin} alt="link to linked in"/>
          </a>
          <p class="bold">LINKED IN</p>
        </li>

        <li>
          <a class="social-media big" href="https://github.com/malin798" target="_blank"> 
            <img src={Github} alt="link to github"/> 
          </a>
          <p class="bold">GITHUB</p>
        </li>

        <li>
          <a class="social-media big" href="https://stackoverflow.com/users/12670065/malin-marie" target="_blank">    
            <img src={StackOverflow} alt="link to stack overflow"/> 
          </a>
          <p class="bold">STACKOVERFLOW</p>
        </li>

      </ul>

    </section>
    )
    }