import React from "react";
import { ContactUsButton, ContactUsSectionContainer, ContactUsSectionContent } from "./ContactUsSectionStyles";

const ContactUsSection = () => {
	return (
		<ContactUsSectionContainer>
			<ContactUsSectionContent>
				<h1>Drive with us</h1>
				<p>
					At Buraq Global Logistics, we value our people. Our highly-trained and experienced drivers are
					crucial to maintaining our tradition of reliable, safe, and high-quality USPS transportation
					services. If you are an experienced trucker looking to join a team dedicated to exceptional customer
					service and safe driving for postal delivery operations, apply today!
				</p>
				<p>
					When you work for Buraq Global Logistics, you're treated like family. We ensure our drivers have the
					necessary tools and resources to succeed and feel comfortable in USPS service operations. Our fleet
					includes Kenworth, Freightliner, Volvo, and other top brands, all equipped with amenities such as
					refrigerators and extra bunks. Our drivers also enjoy top-notch benefits, allowing them to schedule
					routes around their lives, choose from various USPS delivery options, and receive competitive
					compensation. We also welcome owner-operators with their own rigs.
				</p>
				<p>
					Buraq Global Logistics provides comprehensive compensation packages and supports a healthy work-life
					balance for all our USPS transportation drivers.
				</p>
				<ContactUsButton to="/drive-with-us">Learn More</ContactUsButton>
			</ContactUsSectionContent>
		</ContactUsSectionContainer>
	);
};

export default ContactUsSection;
