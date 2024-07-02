import truck1 from '../../../assets//images/trucks/truck1.jpg'
import { ServicesComponentContainer, ServicesComponentContent, ServicesComponentLeft, ServicesComponentRight } from './ServicesComponentsStyles';


const ShortHaulFreight = () => {
  return (
    <ServicesComponentContainer>
        <ServicesComponentContent>
        <ServicesComponentLeft>
            <h2>Short Haul Freight</h2>
            <p>There is no job too small for the Buraq Global Logistics team! Our short-haul trucking services allow us to help with deliveries within a 150-mile radius of our various locations and driver hubs. Whether it is one short trip or multiple trips needed in a day, week or month, our team is here to accomplish the task.</p>
            <p>Whatever you need to be hauled, Buraq Global Logistics will get it where you need it to go safely, conveniently and economically. We are your source for short-haul freight shipping throughout the lower 48 United States and Canada.</p>
        </ServicesComponentLeft>
        <ServicesComponentRight>
            <img src={truck1} alt="ServicesComponent" />
        </ServicesComponentRight>
        </ServicesComponentContent>
    </ServicesComponentContainer>
  );
};

export default ShortHaulFreight;
