import truck9 from '../../../assets//images/trucks/truck9.jpg'
import { ServicesComponentContainer, ServicesComponentContent, ServicesComponentLeft, ServicesComponentRight } from './ServicesComponentsStyles';


const FlatbedTrucking = () => {
  return (
    <ServicesComponentContainer>
        <ServicesComponentContent>
        <ServicesComponentLeft>
            <h2>Flatbed Trucking</h2>
            <p>Our flatbed fleet features trucks with the latest advancements in safety, driver comfort, and CARB-compliance. Each truck is less than five years old, ensuring each load we carry is safe and economical.</p>
            <p>With our fleet of flatbeds, curtain vans, and roll tops, we have the ability to ship all types of goods and materials, such as timber, construction materials, equipment, and more. We are uniquely suited to serve your specialized needs.</p>
        </ServicesComponentLeft>
        <ServicesComponentRight>
            <img src={truck9} alt="ServicesComponent" />
        </ServicesComponentRight>
        </ServicesComponentContent>
    </ServicesComponentContainer>
  );
};

export default FlatbedTrucking;
