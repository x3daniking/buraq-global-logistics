import truck11 from '../../../assets//images/trucks/truck11.jpg'
import { ServicesComponentContainer, ServicesComponentContent, ServicesComponentLeft, ServicesComponentRight } from './ServicesComponentsStyles';


const Dedicated = () => {
  return (
    <ServicesComponentContainer>
        <ServicesComponentContent>
        <ServicesComponentLeft>
            <h2>Dedicated</h2>
            <p>When you need reliable, dedicated transportation solutions, Buraq Global Logistics is the answer. </p>
            <p>Whether you have one load a month or multiple loads a day, need short-haul or long-haul routes, curtain vans or dedicated flatbed loads, we can work with you to transport your products where they need to go anywhere in the United States.</p>
            <p>Let our team of dedicated logistics professionals and experienced drivers take on the fleet management for your businesses, so you can get back to what you do best.</p>
        </ServicesComponentLeft>
        <ServicesComponentRight>
            <img src={truck11} alt="ServicesComponent" />
        </ServicesComponentRight>
        </ServicesComponentContent>
    </ServicesComponentContainer>
  );
};

export default Dedicated;
