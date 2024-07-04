import React from "react";
import {
	DriverBenefitsCard,
	DriverBenefitsCards,
	DriverBenefitsContainer,
	DriverBenefitsImageContainer,
} from "./DriveWithUsStyles";
import { CardsData } from "./DriverBenefitsCardsData";

const DriverBenefits = () => {
	return (
		<DriverBenefitsContainer>
			<h2>Driver Benefits</h2>
			<p>Once you’re Buraq, you’re family – and every family member gets access to our many benefits.</p>
			<DriverBenefitsCards>
				{CardsData.map((cardData) => (
					<DriverBenefitsCard key={cardData.id}>
						<DriverBenefitsImageContainer>
							<img
								src={cardData.image}
								alt="service-img"
							/>
						</DriverBenefitsImageContainer>
						<h3>{cardData.title}</h3>
						<p>{cardData.heading}</p>
					</DriverBenefitsCard>
				))}
			</DriverBenefitsCards>
		</DriverBenefitsContainer>
	);
};

export default DriverBenefits;
