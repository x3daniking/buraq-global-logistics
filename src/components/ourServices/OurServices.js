import React from "react";
import { OurServicesCard, OurServicesCards, OurServicesContainer } from "./OurServicesStyles";
import { CardsData } from "./OurServicesCardsData";

const OurServices = () => {
	return (
		<OurServicesContainer>
			<h2>BURAQ GLOBAL LOGITICS</h2>
			<p>
				Buraq Global Logistics is the partner you can trust to move goods by truck to any destination within the
				United States. We specialize in time-sensitive freight and offer a range of services to meet diverse
				transportation needs, including flatbed, dry van, and specialized freight.
			</p>
			<p>
				Buraq Global Logistics Freight Solutions provides FTL and LTL trucking services across the U.S.,
				ensuring that your goods are delivered safely and on time to their destination. Whether you need long
				haul or short haul services, we have the expertise and equipment to handle your freight efficiently.
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
