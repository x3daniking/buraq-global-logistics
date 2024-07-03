import React from "react";
import truck3 from "../../assets/images/trucks/truck3.jpg";
import { HeroContainer, HeroOverly, HeroSection, HeroSectionBackground, HeroText } from "./ServicesStyles";


const MaintainanceServicesHeroSection = () => {
	return (
		<HeroContainer>
				<HeroSection>
					<HeroSectionBackground imageUrl={truck3}>
					</HeroSectionBackground>
				</HeroSection>
			<HeroOverly>
				<HeroText>
					<h2>Maintenance & Body Services</h2>
				</HeroText>
			</HeroOverly>
	</HeroContainer>
	);
};


export default MaintainanceServicesHeroSection;
