import React from "react";
import truck7 from "../../assets/images/trucks/truck7.jpg";
import { ButtonContainer, HeroContainer, HeroOverly, HeroSection, HeroSectionBackground, HeroText, PrimaryButton } from "../services/ServicesStyles";


const BlogsHeroSection = () => {
	return (
		<HeroContainer>
				<HeroSection>
					<HeroSectionBackground imageUrl={truck7}>
					</HeroSectionBackground>
				</HeroSection>
			<HeroOverly>
				<HeroText>
					<h2>Our Blogs</h2>
					{/* <ButtonContainer>
						<PrimaryButton>Drive With Us</PrimaryButton>
					</ButtonContainer> */}
				</HeroText>
			</HeroOverly>
	</HeroContainer>
	);
};


export default BlogsHeroSection;
