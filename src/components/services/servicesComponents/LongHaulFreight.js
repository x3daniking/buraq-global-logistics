import truck4 from '../../../assets//images/trucks/truck4.jpg'
import { ServicesComponentContainer, ServicesComponentContent, ServicesComponentLeft, ServicesComponentRight } from './ServicesComponentsStyles';


const LongHaulFreight = () => {
  return (
    <ServicesComponentContainer background="none">
        <ServicesComponentContent>
        <ServicesComponentRight>
            <img src={truck4} alt="ServicesComponent" />
        </ServicesComponentRight>
        <ServicesComponentLeft>
            <h2>Long Haul Freight</h2>
            <p>Buraq Global Logistics is your solution for long-haul freight shipping throughout the lower 48 contiguous states and Canada. We have been providing long-haul trucking services as a common carrier for more than 50 years, and pride ourselves in providing outstanding service to our customers.</p>
            <p>We offer customized solutions to meet a variety of logistical and shipping needs – particularly for customers in the construction and big-box retail industries. You can count on our in-house logistics team, experienced drivers and new equipment to get your goods where they need to go safely and efficiently. Contact us today to see how Buraq Global Logistics can serve your long-haul freight shipping needs.</p>
        </ServicesComponentLeft>
        </ServicesComponentContent>
    </ServicesComponentContainer>
  );
};

export default LongHaulFreight;
