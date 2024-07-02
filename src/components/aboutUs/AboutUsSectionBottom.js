import whoWeAreImg from '../../assets/images/whoWeAreImg.svg'
import { AboutUsSectionBottomContainer, AboutUsSectionBottomContent, AboutUsSectionBottomLeft, AboutUsSectionBottomRight } from './AboutUsStyles';


const AboutUsSectionBottom = () => {
  return (
    <AboutUsSectionBottomContainer>
      <AboutUsSectionBottomContent>
        <AboutUsSectionBottomLeft>
          <h2>Who We Are</h2>
          <p>Your Trusted Trucking and Towing Partner. With years of industry experience, we specialize in providing comprehensive solutions for your transportation needs. Our three companies, BGL-I Freight and Repairing, and One-Stop Petroleum, offer reliable trucking, maintenance, and fueling services.</p>
          <p>Our dedicated team is committed to delivering exceptional customer satisfaction, ensuring efficient and professional assistance. Trust us to keep your business moving forward with our expertise and commitment to excellence.</p>
          <button>Get in touch</button>
        </AboutUsSectionBottomLeft>
        <AboutUsSectionBottomRight>
          <img src={whoWeAreImg} alt="WhoWeAre" />
        </AboutUsSectionBottomRight>
      </AboutUsSectionBottomContent>
    </AboutUsSectionBottomContainer>
  );
};

export default AboutUsSectionBottom;
