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
						Buraq Global Logistics is a dedicated provider of comprehensive logistics and transportation
						solutions across the United States. Established four years ago, we have swiftly grown to become
						a trusted name in the industry, specializing in efficient and reliable freight services. Our
						commitment to excellence is evident in every aspect of our operations, from meticulous vehicle
						maintenance to strategic route planning and personalized customer service.
					</p>
					<p>
						At Buraq Global Logistics, we pride ourselves on our ability to meet diverse logistical needs
						with agility and precision. Whether it's short-haul trucking within a 150-mile radius or
						long-haul freight shipping across the lower 48 contiguous states, our experienced team is
						equipped to handle every aspect of the supply chain. We understand the importance of timely
						deliveries, cost-effective solutions, and above all, maintaining the highest standards of safety
						and compliance.
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
						strong and enduring relationships. We value transparency, reliability, and integrity in every
						interaction, ensuring that our clients receive nothing short of exceptional service. Whether
						you're a small business looking for reliable logistics support or a large corporation needing
						customized freight solutions, Buraq Global Logistics is here to exceed your expectations and
						deliver results that matter.
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
