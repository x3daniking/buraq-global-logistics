import React from 'react';
import { ServicesFilterBarContainer, ServicesFilterBarMenu } from './ServicesStyles';

const ServicesFilterBar = ({ handleScrollToSection, refs }) => {
  return (
    <ServicesFilterBarContainer>
      <ServicesFilterBarMenu>
        <button onClick={() => handleScrollToSection(refs.shortHaulRef)}>Short Haul Freight</button>
        <button onClick={() => handleScrollToSection(refs.longHaulRef)}>Long Haul Freight</button>
        <button onClick={() => handleScrollToSection(refs.flatbedRef)}>Flatbed Trucking</button>
        <button onClick={() => handleScrollToSection(refs.heavyHaulRef)}>Heavy Haul</button>
        <button onClick={() => handleScrollToSection(refs.dedicatedRef)}>Dedicated</button>
        <button onClick={() => handleScrollToSection(refs.residualsRef)}>Residuals</button>
      </ServicesFilterBarMenu>
    </ServicesFilterBarContainer>
  );
}

export default ServicesFilterBar;
