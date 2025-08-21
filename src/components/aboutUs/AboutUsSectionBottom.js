import whoWeAreImg from "../../assets/images/whoWeAreImg.svg";
import {
	AboutUsSectionBottomContainer,
	AboutUsSectionBottomContent,
	AboutUsSectionBottomLeft,
	AboutUsSectionBottomRight,
	GetInTouchButton,
} from "./AboutUsStyles";

const AboutUsSectionBottom = () => {
	return (
		<AboutUsSectionBottomContainer>
			<AboutUsSectionBottomContent>
				<AboutUsSectionBottomLeft>
					<h2>Who We Are</h2>
					<p>
						Buraq Global Logistics is a dedicated provider of specialized transportation solutions serving
						the United States Postal Service (USPS). Established four years ago, we have swiftly grown to
						become a trusted partner in postal logistics, specializing in efficient and reliable mail and
						package delivery services. Our commitment to excellence is evident in every aspect of our USPS
						operations, from strategic route planning to personalized service delivery.
					</p>
					<p>
						At Buraq Global Logistics, we pride ourselves on our ability to provide specialized
						transportation solutions with precision and reliability. As an exclusive service provider for
						the United States Postal Service (USPS), our experienced team is equipped to handle the critical
						aspects of mail and package delivery logistics. We understand the importance of timely
						deliveries, operational efficiency, and maintaining the highest standards of safety and
						compliance in postal service operations.
					</p>
					<p>
						Driven by a passion for innovation and sustainability, Buraq Global Logistics integrates
						cutting-edge technology and eco-friendly practices into our operations. From advanced fleet
						management systems to environmentally conscious route optimization, we strive to minimize our
						carbon footprint while maximizing operational efficiency. Our dedication to sustainable
						logistics not only benefits our clients but also contributes positively to the communities we
						serve.
					</p>
					<p>
						As a customer-centric organization, Buraq Global Logistics places great emphasis on building
						strong and enduring relationships with USPS and the communities we serve. We value transparency,
						reliability, and integrity in every interaction, ensuring exceptional service in all postal
						delivery operations. As the exclusive transportation partner for USPS, Buraq Global Logistics is
						committed to exceeding service expectations and delivering results that connect communities
						across America.
					</p>
					<GetInTouchButton to="/contact">Get in touch</GetInTouchButton>
				</AboutUsSectionBottomLeft>
				{/* <AboutUsSectionBottomRight>
					<img
						src={whoWeAreImg}
						alt="WhoWeAre"
					/>
				</AboutUsSectionBottomRight> */}
			</AboutUsSectionBottomContent>
		</AboutUsSectionBottomContainer>
	);
};

export default AboutUsSectionBottom;
