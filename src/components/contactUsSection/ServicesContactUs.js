import React from "react";
import {
	ContactUsButton,
	ContactUsButtonContainer,
	ContactUsSectionContainer,
	ContactUsSectionContent,
} from "./ContactUsSectionStyles";

const ServicesContactUs = () => {
	return (
		<ContactUsSectionContainer>
			<ContactUsSectionContent>
				<h3>Comprehensive fleet management solutions with our dedicated fleet</h3>
				<p>
					For over four years, Buraq Global Logistics has been dedicated to providing customized shipping
					solutions to our customers within the United States. Our in-house logistics team and experienced
					drivers ensure efficient operations tailored to meet your specific needs.
				</p>
				<p>
					Navigating compliance requirements can be complex and time-consuming. At Buraq Global Logistics, our
					fleets operate seamlessly with the highest quality drivers and dispatchers, ensuring your products
					reach their destinations on time and in full. We maintain an industry-leading on-time delivery rate,
					relieving you of any concerns about meeting shipping deadlines.
				</p>
				<p>
					At Buraq Global Logistics, we pride ourselves on delivering reliable and trustworthy transportation
					services that grow with your business needs. Whether you require consistent deliveries or tailored
					logistics solutions, we are here to support you every step of the way.
				</p>
				<ContactUsButtonContainer>
					<ContactUsButton to="/contact">Contact Us Today</ContactUsButton>
					<ContactUsButton to="/drive-with-us">Drive With Us</ContactUsButton>
				</ContactUsButtonContainer>
			</ContactUsSectionContent>
		</ContactUsSectionContainer>
	);
};

export default ServicesContactUs;
