import React from "react";
import truck2 from "../../assets/images/trucks/truck2.jpg";
import { HeroContainer, HeroOverly, HeroSection, HeroSectionBackground, HeroText } from "../services/ServicesStyles";


const DriveWithUsHeroSection = () => {
	return (
		<HeroContainer>
				<HeroSection>
					<HeroSectionBackground imageUrl={truck2}>
					</HeroSectionBackground>
				</HeroSection>
			<HeroOverly>
				<HeroText>
					<h2>Be A Part Of Something Bigger</h2>
					{/* <ButtonContainer>
						<PrimaryButton>Drive With Us</PrimaryButton>
					</ButtonContainer> */}
				</HeroText>
			</HeroOverly>
	</HeroContainer>
	);
};


export default DriveWithUsHeroSection;
