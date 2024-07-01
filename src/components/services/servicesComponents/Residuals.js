import truck3 from '../../../assets//images/trucks/truck3.jpg'
import { ServicesComponentContainer, ServicesComponentContent, ServicesComponentLeft, ServicesComponentRight } from './ServicesComponentsStyles';


const Residuals = () => {
  return (
    <ServicesComponentContainer background="none">
        <ServicesComponentContent>
        <ServicesComponentRight>
            <img src={truck3} alt="ServicesComponent" />
        </ServicesComponentRight>
        <ServicesComponentLeft>
            <h2>Residuals</h2>
            <p>Our fleet is not complete without our ability to haul even the smallest of materials. Wood chip residuals hauling is another service offered by Buraq Global Logistics.</p>
            <p>Our team is here to provide the services you are after. Let Buraq Global Logistics handle your residuals.</p>
        </ServicesComponentLeft>
        </ServicesComponentContent>
    </ServicesComponentContainer>
  );
};

export default Residuals;
