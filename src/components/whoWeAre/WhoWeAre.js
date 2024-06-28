import { WhoWeAreContainer, WhoWeAreLeft, WhoWeAreRight } from "./WhoWeAreStyles";
import truck11 from '../../assets//images/trucks/truck11.jpg'


const WhoWeAre = () => {
  return (
    <WhoWeAreContainer>
      <WhoWeAreLeft>
        <h2>Safety</h2>
        <p>Buraq Global Logistics is proud to serve the lower 48 contiguous states and Canada with excellence and care. Our commitment to safety is reflected in our driving and records, including numerous awards throughout our 50-year history. We protect your investments with our own, equipping our drivers with the newest trucks and trailers that boast top-of-the-line safety features.</p>
      </WhoWeAreLeft>
      <WhoWeAreRight>
        <img src={truck11} alt="WhoWeAre" />
      </WhoWeAreRight>
    </WhoWeAreContainer>
  );
};

export default WhoWeAre;
