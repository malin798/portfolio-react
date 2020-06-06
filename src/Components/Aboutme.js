import React, {useState, useEffect} from 'react'

export const Aboutme = ({data}) => {
  const [aboutMe, setAboutMe] = useState()
  useEffect(() => {
    
    setAboutMe(data.about.text)
    console.log(aboutMe)
  }, [])
  
  if (!aboutMe) {
    return (
      <>
      </>
    )
  } else {

    return (
      <section className="about-me">
        <p>
          <div className="position-holder-element">
            <div className="decoration-element">
              <div className="colored-line"></div>
              <div className="colored-circle"></div>
            </div>
          </div>
          
          {aboutMe.intro}
        </p>

        <p>
          {aboutMe.paragraph}
        </p>

      </section>
    )
  }
}