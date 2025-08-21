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
				<h3>Dedicated USPS Transportation Solutions</h3>
				<p>
					For over four years, Buraq Global Logistics has been the exclusive transportation partner for the
					United States Postal Service (USPS). Our specialized logistics team and experienced drivers ensure
					efficient mail and package delivery operations tailored to meet USPS service standards.
				</p>
				<p>
					With our commitment to operational excellence and compliance with postal service requirements, Buraq
					Global Logistics provides seamless transportation services with the highest quality drivers and
					dispatchers. We maintain an industry-leading on-time delivery rate for all USPS shipments, ensuring
					mail and packages reach their destinations reliably.
				</p>
				<p>
					At Buraq Global Logistics, we pride ourselves on delivering reliable and trustworthy USPS
					transportation services. As your dedicated postal service partner, we ensure consistent performance
					and operational excellence in mail delivery logistics across the United States.
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
