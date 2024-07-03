import truck3 from "../../../assets//images/trucks/truck3.jpg";
import {
	ServicesComponentContainer,
	ServicesComponentContent,
	ServicesComponentLeft,
	ServicesComponentRight,
} from "./ServicesComponentsStyles";

const Residuals = () => {
	return (
		<ServicesComponentContainer background="none">
			<ServicesComponentContent>
				<ServicesComponentRight>
					<img
						src={truck3}
						alt="ServicesComponent"
					/>
				</ServicesComponentRight>
				<ServicesComponentLeft>
					<h2>Residuals</h2>
					<p>
						Buraq Global Logistics enhances our fleet with the capability to transport even the smallest
						materials, including wood chip residuals. This service reflects our commitment to comprehensive
						hauling solutions tailored to your needs. Trust our experienced team to manage your residuals
						efficiently.
					</p>
				</ServicesComponentLeft>
			</ServicesComponentContent>
		</ServicesComponentContainer>
	);
};

export default Residuals;
