import React from 'react'
import Lottie from 'react-lottie'
import animationData from './Lottie/14788-cat'

export const LottieAnimation = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return(
    <>
         
      <Lottie options={defaultOptions}
            height={300}
            width={300}
      />
    </>
  )
}