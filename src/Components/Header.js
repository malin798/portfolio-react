import React from 'react'
import LinkedIn from 'images/linkedin.svg'
import GitHub from 'images/github.svg'
import StackOverflow from 'images/stackoverflow.svg'
import ProfilePic from 'images/profilepic.png'

export const Header = () => {
  return (
    <header>

      <section class="social-media-top">

        <a title="linked in" class="social-media small" href="https://www.linkedin.com/in/malin-andersson-22261b190/" target="_blank"> 
          <img src={LinkedIn} alt="linked in"/>
        </a>

        <a title="github" class="social-media small" href="https://github.com/malin798" target="_blank"> 
          <img src={GitHub} alt="github"/> 
        </a>

        <a title="stack overflow" class="social-media small" href="https://stackoverflow.com/users/12670065/malin-marie" target="_blank"> 
          <img src={StackOverflow} alt="stack overflow"/> 
        </a>

      </section>

      <section class="presentation bold">

        <p><span class="not-bold">Portfolio:</span> MALIN ANDERSSON</p>
        <h1>frontend developer</h1>
        <h2>+ Communication skills</h2>

      </section>

      <img class ="profile-image" src={ProfilePic} alt="profile picture"/>

    </header>
  )
}