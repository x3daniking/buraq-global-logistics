import truck19 from '../../../assets//images/trucks/truck19.jpg'
import { ServicesComponentContainer, ServicesComponentContent, ServicesComponentLeft, ServicesComponentRight } from './ServicesComponentsStyles';


const HeavyHaul = () => {
  return (
    <ServicesComponentContainer background="none">
        <ServicesComponentContent>
        <ServicesComponentRight>
            <img src={truck19} alt="ServicesComponent" />
        </ServicesComponentRight>
        <ServicesComponentLeft>
            <h2>Heavy Haul</h2>
            <p>We tip the scales at Buraq Global Logistics. Our heavy haul fleet is here to take on your heaviest of loads. Master coils, slit coils, up to 80k payload as well as industrial equipment, our team can get it done.</p>
            <p>Our ability to haul loads of this size and do it all with safety in mind will allow you to know your product is in good hands as it is transported to its destination. Let the Buraq Global Logistics team organize and carry out the transportation of your heavy equipment.</p>
        </ServicesComponentLeft>
        </ServicesComponentContent>
    </ServicesComponentContainer>
  );
};

export default HeavyHaul;
