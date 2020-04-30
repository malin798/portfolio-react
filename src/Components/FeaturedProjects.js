import React from 'react'
import Image1 from 'images/featured-project-pizza-place.png'
import Image2 from 'images/featured-project-cluedo.png'
import Image3 from 'images/featured-project-weather-app.png'
import Image4 from 'images/featured-project-business-site.png'

export const FeaturedProjects = () => {
  return (
    <section class="background text-box">
    <h3 class="orange-box">FEATURED PROJECTS</h3>

      <ul class="left-list">
        <li>
          <a href="https://malins-pizza-bot-project.netlify.com" target="_blank">
            <img src={Image1} alt="pizza bot project" class="image"></img>
            <p>
              <span class="colored-text bold">Pizza bot.</span> Web app built in Javascript <span class="colored-text underline bold">>></span> 
            </p>
          </a>
          
          <section class="project-tags">
            <div class="tags">HTML5</div>
            <div class="tags">CSS3</div>
            <div class="tags">Javascript ES6</div>
          </section>
        </li>

        <li>
          <a href="https://malins-project-clue.netlify.com/" target="_blank">
            <img src={Image2} class="image"></img>
            <p>
              <span class="colored-text bold">Cluedo.</span> Web app built in Javascript <span class="colored-text underline bold">>></span> 
            </p>
          </a>
          
          <section class="project-tags">
            <div class="tags">HTML5</div>
            <div class="tags">CSS3</div>
            <div class="tags">Javascript ES6</div>
          </section>
        </li>

        <li class="hidden-mobile">
          <a href="https://malins-weather-app.netlify.com/" target="_blank">
            <img src={Image3} class="image"></img>
            <p>
              <span class="colored-text bold">WEATHER APP.</span> Web app built in Javascript using open weather API <span class="colored-text underline bold">>></span> 
            </p>
          </a>
          
          <section class="project-tags">
            <div class="tags">HTML5</div>
            <div class="tags">CSS3</div>
            <div class="tags">API</div>
            <div class="tags">Javascript ES6</div>
          </section>
        </li>

        <li class="hidden-mobile">
          <a href="https://malins-business-site.netlify.com/" target="_blank">
            <img src={Image4} class="image"></img>
            <p>
              <span class="colored-text bold">Business site.</span> Web app built in Javascript <span class="colored-text underline bold">>></span> 
            </p>
          </a>
          
          <section class="project-tags">
            <div class="tags">HTML5</div>
            <div class="tags">CSS3</div>
            <div class="tags">Javascript ES6</div>
          </section>
        </li>
      </ul>
      </section>
  )
}