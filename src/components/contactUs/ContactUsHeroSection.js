import React from "react";
import truck19 from "../../assets/images/trucks/truck19.jpg";
import { ButtonContainer, HeroContainer, HeroOverly, HeroSection, HeroSectionBackground, HeroText, PrimaryButton } from "../services/ServicesStyles";


const ContactUsHeroSection = () => {
	return (
		<HeroContainer>
				<HeroSection>
					<HeroSectionBackground imageUrl={truck19}>
					</HeroSectionBackground>
				</HeroSection>
			<HeroOverly>
				<HeroText>
					<h2>Contact Us</h2>
					{/* <ButtonContainer>
						<PrimaryButton>Drive With Us</PrimaryButton>
					</ButtonContainer> */}
				</HeroText>
			</HeroOverly>
	</HeroContainer>
	);
};


export default ContactUsHeroSection;
