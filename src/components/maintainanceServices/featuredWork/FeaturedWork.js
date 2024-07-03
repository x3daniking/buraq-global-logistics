import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { FeaturedWorkContainer } from './FeaturedWorkStyles';
import featuredWorkOne from '../../../assets/images/featuredWorkOne.jpg';
import featuredWorkTwo from '../../../assets/images/featuredWorkTwo.jpg';
import featuredWorkThree from '../../../assets/images/featuredWorkThree.jpg';
import featuredWorkFour from '../../../assets/images/featuredWorkFour.jpg';

const FeaturedWork = () => {
  const images = [
    {
      original: featuredWorkOne,
      thumbnail: featuredWorkOne,
    },
    {
      original: featuredWorkTwo,
      thumbnail: featuredWorkTwo,
    },
    {
      original: featuredWorkThree,
      thumbnail: featuredWorkThree,
    },
    {
      original: featuredWorkFour,
      thumbnail: featuredWorkFour,
    },
  ];

  return (
    <FeaturedWorkContainer>
      <h2>Featured Work</h2>
      <p>Discover our impressive up-to-date collection of showcased projects that highlight our expertise and capabilities</p>
      <ImageGallery items={images} />
    </FeaturedWorkContainer>
  );
};

export default FeaturedWork;
