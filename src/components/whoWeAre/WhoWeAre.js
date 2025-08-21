import { WhoWeAreContainer, WhoWeAreLeft, WhoWeAreRight } from "./WhoWeAreStyles";
import truck11 from "../../assets//images/trucks/truck11.jpg";

const WhoWeAre = () => {
	return (
		<WhoWeAreContainer>
			<WhoWeAreLeft>
				<h2>Safety</h2>
				<p>
					Buraq Global Logistics is dedicated to providing exceptional USPS transportation services across the
					contiguous United States. Our commitment to safety is evident in our outstanding driving record and
					recognition, earned over our four years of operation. As an exclusive USPS service provider, we
					prioritize the protection of mail and packages by equipping our drivers with the latest trucks and
					trailers featuring state-of-the-art safety technologies.
				</p>
			</WhoWeAreLeft>
			<WhoWeAreRight>
				<img
					src={truck11}
					alt="WhoWeAre"
				/>
			</WhoWeAreRight>
		</WhoWeAreContainer>
	);
};

export default WhoWeAre;
