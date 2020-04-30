import React from 'react'
import { Header } from './Components/Header'
import { Aboutme } from './Components/Aboutme'
import { Tech } from './Components/Tech'
import { FeaturedProjects } from './Components/FeaturedProjects'
import { OtherProjects } from './Components/OtherProjects'
import { MySkills } from './Components/MySkills'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'

export const App = () => {
  return (
    <>
      < Header />
      
      <main>
        < Aboutme />
        < Tech />
        < FeaturedProjects />
        < OtherProjects />  
        < MySkills />
        < Contact />
      </main>

      < Footer />
     
    </>
  )
}
