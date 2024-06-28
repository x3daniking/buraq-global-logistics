import React from 'react'
import {FeaturedWorkCards, FeaturedWorkContainer } from './FeaturedWorkStyles'
import featuredWorkOne from '../../assets/images/featuredWorkOne.jpg'
import featuredWorkTwo from '../../assets/images/featuredWorkTwo.jpg'
import featuredWorkThree from '../../assets/images/featuredWorkThree.jpg'
import featuredWorkFour from '../../assets/images/featuredWorkFour.jpg'

const FeaturedWork = () => {
  return (
    <FeaturedWorkContainer>
      <h2>Featured Work</h2>
      <p>Discover our impressive uptodate collection of showcased projects that highlight our expertise and capabilities</p>
      <FeaturedWorkCards>
        <img src={featuredWorkOne} alt="featuredWork" />
        <img src={featuredWorkTwo} alt="featuredWork" />
        <img src={featuredWorkThree} alt="featuredWork" />
        <img src={featuredWorkFour} alt="featuredWork" />
      </FeaturedWorkCards>
    </FeaturedWorkContainer>
  )
}

export default FeaturedWork
