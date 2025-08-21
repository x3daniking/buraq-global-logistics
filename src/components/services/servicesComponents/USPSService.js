import truck5 from "../../../assets//images/trucks/truck5.jpg";
import {
	ServicesComponentContainer,
	ServicesComponentContent,
	ServicesComponentLeft,
	ServicesComponentRight,
} from "./ServicesComponentsStyles";

const USPSService = () => {
	return (
		<ServicesComponentContainer>
			<ServicesComponentContent>
				<ServicesComponentLeft>
					<h2>USPS Services</h2>
					<p>
						Buraq Global Logistics is proud to be an exclusive service provider for the United States Postal
						Service (USPS). We specialize in reliable, efficient transportation solutions that support USPS
						operations across the nation.
					</p>
					<p>
						Our dedicated fleet and experienced drivers ensure timely delivery of mail and packages,
						maintaining the high standards of service that USPS customers expect. With our commitment to
						safety, reliability, and operational excellence, we play a vital role in connecting communities
						through mail delivery services.
					</p>
					<p>
						Trust Buraq Global Logistics for all USPS transportation needs – we're your reliable partner in
						keeping America connected through efficient mail and package delivery services.
					</p>
				</ServicesComponentLeft>
				<ServicesComponentRight>
					<img
						src={truck5}
						alt="USPS Service Truck"
					/>
				</ServicesComponentRight>
			</ServicesComponentContent>
		</ServicesComponentContainer>
	);
};

export default USPSService;
