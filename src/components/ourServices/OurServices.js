import React from "react";
import { OurServicesCard, OurServicesCards, OurServicesContainer, ServicesCardButton } from "./OurServicesStyles";
import { CardsData } from "./OurServicesCardsData";

const OurServices = () => {
	return (
		<OurServicesContainer>
			<h2>BURAQ GLOBAL LOGITICS</h2>
			<p>
				Buraq Global Logistics is the exclusive transportation partner for the United States Postal Service
				(USPS). We specialize in reliable mail and package delivery services, ensuring efficient operations that
				support USPS delivery requirements across the United States.
			</p>
			<p>
				With our experienced team and modern fleet, Buraq Global Logistics provides dedicated USPS
				transportation services, ensuring that mail and packages are delivered safely and on time to their
				destinations. Our commitment to operational excellence makes us a trusted partner in connecting
				communities nationwide.
			</p>
			<OurServicesCards>
				{CardsData.map((cardData) => (
					<OurServicesCard key={cardData.id}>
						{/* <img src={cardData.image} alt='service-img' /> */}
						<h3>{cardData.title}</h3>
						<p>{cardData.heading}</p>
					</OurServicesCard>
				))}
			</OurServicesCards>
		</OurServicesContainer>
	);
};

export default OurServices;
