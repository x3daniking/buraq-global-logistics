import React from "react";
import {
	MaintainanceOurServicesContainer,
	OurServicesCard,
	OurServicesCards,
	OurServicesContainer,
} from "./OurServicesStyles";
import { CardsData } from "./OurServicesCardsData";

const MaintenanceOurServices = () => {
	return (
		<MaintainanceOurServicesContainer>
			<OurServicesContainer>
				<h2>Our Services</h2>
				<p>
					We at Buraq Global Logistics are dedicated to providing reliable and efficient assistance to truck
					drivers and fleet operators in need of roadside support
				</p>
				<OurServicesCards>
					{CardsData.map((cardData) => (
						<OurServicesCard key={cardData.id}>
							<img
								src={cardData.image}
								alt="service-img"
							/>
							<h3>{cardData.title}</h3>
							<p>{cardData.heading}</p>
						</OurServicesCard>
					))}
				</OurServicesCards>
			</OurServicesContainer>
		</MaintainanceOurServicesContainer>
	);
};

export default MaintenanceOurServices;
