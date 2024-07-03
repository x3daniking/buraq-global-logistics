import truck1 from "../../../assets//images/trucks/truck1.jpg";
import {
	ServicesComponentContainer,
	ServicesComponentContent,
	ServicesComponentLeft,
	ServicesComponentRight,
} from "./ServicesComponentsStyles";

const ShortHaulFreight = () => {
	return (
		<ServicesComponentContainer>
			<ServicesComponentContent>
				<ServicesComponentLeft>
					<h2>Short Haul Freight</h2>
					<p>
						At Buraq Global Logistics, no job is too small for our dedicated team. Our short-haul trucking
						services efficiently handle deliveries within a 150-mile radius of our various locations and
						driver hubs across the United States. Whether you require one-time transportation or ongoing
						deliveries scheduled daily, weekly, or monthly, our team is committed to meeting your needs.
					</p>
					<p>
						Buraq Global Logistics ensures safe, convenient, and economical transportation of your cargo to
						its destination. We provide reliable short-haul freight shipping throughout the contiguous
						United States, ensuring your shipments arrive on time and in excellent condition.
					</p>
				</ServicesComponentLeft>
				<ServicesComponentRight>
					<img
						src={truck1}
						alt="ServicesComponent"
					/>
				</ServicesComponentRight>
			</ServicesComponentContent>
		</ServicesComponentContainer>
	);
};

export default ShortHaulFreight;
