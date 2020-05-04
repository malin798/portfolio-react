import React, { useState, useEffect } from 'react'
import { Header } from './Components/Header'
import { Aboutme } from './Components/Aboutme'
import { Tech } from './Components/Tech'
import { FeaturedProjects } from './Components/FeaturedProjects'
import { OtherProjects } from './Components/OtherProjects'
import { MySkills } from './Components/MySkills'
import { ForMore } from './Components/ForMore'
import { Footer } from './Components/Footer'
import { LottieAnimation } from 'Components/LottieAnimation'

let malinsAPI = {}

export const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://malins-portfolio-api.herokuapp.com/", {
      Header: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        malinsAPI = data
        setTimeout(() => setLoading(false), 1000)

      })
  }, [])
   
  if (loading) {
   
    return (
      <>
      < Header />

      <div className="loading-animation">

        <h1>Portfolio loading...</h1>
       < LottieAnimation />
       
      </div>
      </>
    )
  }
  
  return (
    <>
      
      < Header />
      <main>
        < Aboutme data={malinsAPI} />
        < Tech data={malinsAPI} />
        < FeaturedProjects data={malinsAPI} />
        < OtherProjects data={malinsAPI} />  
        < MySkills data={malinsAPI} />
        < ForMore data={malinsAPI} />
      </main>

      < Footer />
     
    </>
  )
}
