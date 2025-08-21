import React from "react";
import truck3 from "../../assets/images/trucks/truck3.jpg";
import {
	ButtonContainer,
	HeroContainer,
	HeroOverly,
	HeroSection,
	HeroSectionBackground,
	HeroText,
	PrimaryButton,
	SecondaryButton,
} from "./ServicesStyles";

const ServicesHeroSection = () => {
	return (
		<HeroContainer>
			<HeroSection>
				<HeroSectionBackground imageUrl={truck3}></HeroSectionBackground>
			</HeroSection>
			<HeroOverly>
				<HeroText>
					<h2>USPS Transportation Solutions</h2>
					{/* <p>Buraq Global Logistics is a privately owned, progressive company specializing in handling flatbed freight. Our logistics team will match your freight needs to one of our carriers to get your products delivered safely and on time.</p>
					<ButtonContainer>
						<PrimaryButton>Drive With Us</PrimaryButton>
						<SecondaryButton>Trucking Services</SecondaryButton>
					</ButtonContainer> */}
				</HeroText>
			</HeroOverly>
		</HeroContainer>
	);
};

export default ServicesHeroSection;
