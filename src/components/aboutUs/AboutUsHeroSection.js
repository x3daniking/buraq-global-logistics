import React from "react";
import truck2 from "../../assets/images/trucks/truck2.jpg";
import { ButtonContainer, HeroContainer, HeroOverly, HeroSection, HeroSectionBackground, HeroText, PrimaryButton } from "../services/ServicesStyles";


const AbouttUsHeroSection = () => {
	return (
		<HeroContainer>
				<HeroSection>
					<HeroSectionBackground imageUrl={truck2}>
					</HeroSectionBackground>
				</HeroSection>
			<HeroOverly>
				<HeroText>
					<h2>About Us</h2>
					{/* <ButtonContainer>
						<PrimaryButton>Drive With Us</PrimaryButton>
					</ButtonContainer> */}
				</HeroText>
			</HeroOverly>
	</HeroContainer>
	);
};


export default AbouttUsHeroSection;
