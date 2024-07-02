import React, { useRef } from 'react';
import ServicesHeroSection from './servicesHeroSection';
import ServicesFilterBar from './ServicesFilterBar';
import ServicesContactUs from '../contactUsSection/ServicesContactUs';
import ShortHaulFreight from './servicesComponents/ShortHaulFreight';
import LongHaulFreight from './servicesComponents/LongHaulFreight';
import FlatbedTrucking from './servicesComponents/FlatbedTrucking';
import HeavyHaul from './servicesComponents/HeavyHaul';
import Dedicated from './servicesComponents/Dedicated';
import Residuals from './servicesComponents/Residuals';

const Services = () => {
  const shortHaulRef = useRef(null);
  const longHaulRef = useRef(null);
  const flatbedRef = useRef(null);
  const heavyHaulRef = useRef(null);
  const dedicatedRef = useRef(null);
  const residualsRef = useRef(null);

  const handleScrollToSection = (ref) => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      const yOffset = -80; // Adjust this value for the desired offset
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <>
      <ServicesHeroSection />
      <ServicesFilterBar 
        handleScrollToSection={handleScrollToSection}
        refs={{ shortHaulRef, longHaulRef, flatbedRef, heavyHaulRef, dedicatedRef, residualsRef }}
      />
      <ServicesContactUs />
      <div ref={shortHaulRef}><ShortHaulFreight /></div>
      <div ref={longHaulRef}><LongHaulFreight /></div>
      <div ref={flatbedRef}><FlatbedTrucking /></div>
      <div ref={heavyHaulRef}><HeavyHaul /></div>
      <div ref={dedicatedRef}><Dedicated /></div>
      <div ref={residualsRef}><Residuals /></div>
    </>
  );
}

export default Services;
