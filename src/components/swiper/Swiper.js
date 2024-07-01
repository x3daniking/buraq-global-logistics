import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import truck1 from "../../assets/images/trucks/truck1.jpg";
import truck2 from "../../assets/images/trucks/truck2.jpg";
import truck3 from "../../assets/images/trucks/truck3.jpg";
import truck4 from "../../assets/images/trucks/truck4.jpg";
import truck5 from "../../assets/images/trucks/truck5.jpg";

// import required modules
import { Autoplay } from "swiper/modules";

const AutoSwiper = () => {
	const slides = [
		{
			id: 1,
			imageUrl: truck1,
			title: "Buraq proudly offers a wide array of logistics solutions",
			heading:
				"Buraq Global Logistics is a privately owned, progressive company specializing in handling flatbed freight. Our logistics team will match your freight needs to one of our carriers to get your products delivered safely and on time.",
		},
		{
			id: 2,
			imageUrl: truck2,
			title: "Buraq proudly offers a wide array of logistics solutions",
			heading:
				"Buraq Global Logistics is a privately owned, progressive company specializing in handling flatbed freight. Our logistics team will match your freight needs to one of our carriers to get your products delivered safely and on time.",
		},
		{
			id: 3,
			imageUrl: truck3,
			title: "Buraq proudly offers a wide array of logistics solutions",
			heading:
				"Buraq Global Logistics is a privately owned, progressive company specializing in handling flatbed freight. Our logistics team will match your freight needs to one of our carriers to get your products delivered safely and on time.",
		},
		{
			id: 4,
			imageUrl: truck4,
			title: "Buraq proudly offers a wide array of logistics solutions",
			heading:
				"Buraq Global Logistics is a privately owned, progressive company specializing in handling flatbed freight. Our logistics team will match your freight needs to one of our carriers to get your products delivered safely and on time.",
		},
		{
			id: 5,
			imageUrl: truck5,
			title: "Buraq proudly offers a wide array of logistics solutions",
			heading:
				"Buraq Global Logistics is a privately owned, progressive company specializing in handling flatbed freight. Our logistics team will match your freight needs to one of our carriers to get your products delivered safely and on time.",
		},
	];

	return (
		<SwiperContainer>
		<StyledSwiper
			modules={[Autoplay]}
			spaceBetween={30}
			centeredSlides={true}
			autoplay={{
				delay: 2000,
				disableOnInteraction: false,
			}}>
			{slides.map((slide) => (
				<SwiperSlide key={slide.id}>
					<Slide imageUrl={slide.imageUrl}>
					</Slide>
				</SwiperSlide>
			))}
		</StyledSwiper>
			<SwiperOverly>
				<SwiperText>
					<h2>Buraq proudly offers a wide array of logistics solutions</h2>
					<p>Buraq Global Logistics is a privately owned, progressive company specializing in handling flatbed freight. Our logistics team will match your freight needs to one of our carriers to get your products delivered safely and on time.</p>
					<ButtonContainer>
						<PrimaryButton>Contact Us</PrimaryButton>
						<SecondaryButton>Trucking Services</SecondaryButton>
					</ButtonContainer>
				</SwiperText>
			</SwiperOverly>
	</SwiperContainer>
	);
};


const SwiperContainer = styled.div`
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.7);
	position: relative;
`;

const StyledSwiper = styled(Swiper)`
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.7);
`;

const Slide = styled.div`
	height: 100%;
	background-image: url(${(props) => props.imageUrl});
	background-size: cover;
	background-position: center;
`;

const SwiperOverly = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.7);
	width: 100%;
	height: 100%;
	z-index: 1;
`;

const SwiperText = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	max-width: 1100px;
	padding-top: 100px;

	h2 {
		color: #ffffff;
		font-size: 64px;
		font-weight: 700;
		line-height: 80px;
		max-width: 660px;
	}
	p {
		color: #ffffff;
		font-size: 18px;
		line-height: 35px;
		max-width: 700px;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;
const PrimaryButton = styled.button`
  background: #977d44;
  padding: 12px 28px;
  border-radius: 8px;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background: #fff;
  }
`;

const SecondaryButton = styled.button`
  padding: 12px 28px;
  border-radius: 8px;
  color: #977d44;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #977d44;
  background: none;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background: #fff;
  }
`;


export default AutoSwiper;
