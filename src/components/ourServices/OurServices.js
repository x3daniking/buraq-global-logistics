import React from "react";
import { OurServicesCard, OurServicesCards, OurServicesContainer } from "./OurServicesStyles";
import { CardsData } from "./OurServicesCardsData";

const OurServices = () => {
	return (
		<OurServicesContainer>
			<h2>BURAQ GLOBAL LOGITICS</h2>
			<p>
				BURAQ GLOBAL LOGITICS is the partner you can trust to move goods by truck or ocean carrier to any
				destination. We specialize in time-sensitive freight, especially refrigerated products.
			</p>
			<p>
				BURAQ GLOBAL LOGITICS Freight Solutions provides FTL trucking services across the U.S., Canada and
				Mexico; and to and from the U.S. via more than 60 global ports. Eagle Logistics Systems serves Puerto
				Rico. And SeaWide Express handles FAK to and from Alaska, Hawaii, and Guam.
			</p>
			<OurServicesCards>
				{CardsData.map((cardData) => (
					<OurServicesCard key={cardData.id}>
						{/* <img src={cardData.image} alt='service-img' /> */}
						<h3>{cardData.title}</h3>
						<p>{cardData.heading}</p>
						<button>Get Started</button>
					</OurServicesCard>
				))}
			</OurServicesCards>
		</OurServicesContainer>
	);
};

export default OurServices;
