// components/ClientsReviewsSwiper.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import styled from 'styled-components';

import { Pagination } from 'swiper/modules';
import { reviews } from './reviews';
import { MdOutlineStarPurple500 } from "react-icons/md";


const SliderContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  padding: 10px;
  

  .swiper-wrapper{
    padding: 0 0 60px 0;
  }
  .swiper-pagination {
  bottom: 0;
}
  .swiper-pagination-bullet {
  background-color: #000;
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background-color: #ff6db9;
  opacity: 1;
}
`;

const ReviewCard = styled.div`
	padding: 40px 20px;
  display: flex;
  gap: 30px; 
  margin: 0 5px;
opacity: 1;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    border-radius: 30px;
    box-shadow: 3px 3px 9px rgba(0, 0, 0, .65);
     
@media (max-width: 600px) {
flex-direction: column;
gap: 20px;
padding: 30px 20px;
}
`;

const ClientInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 130px;

  img{
    width: 85px;
    height: 85px;
    border-radius: 50px;
  }

  h4{
    color: #4B4B4B;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.4px;
    text-align: center;
    width: 130px;
    
  }
`;

const ClientReview = styled.div`
  display: flex;
  flex-direction: column;

  h3{
    color: #373737;
    font-size: 24px;
    font-weight: 500;
    margin: 0 0 25px;
  }

  p{
    color: #777777;
    font-size: 16px;
    font-weight: 500;
    font-style: italic;
    line-height: 24px;
    letter-spacing: 0.4px;
    max-width: 390px;
    height: 200px;
  }

  h5{
    color: #F2CE1B;
  }
  
@media (max-width: 1200px) {
p{
  max-width: 900px;
  height: 100%;
  margin-bottom: 20px;
}
}
    
@media (max-width: 600px) {
gap: 10px;
h3{
  margin: 0;
}
p{
  font-size: 14px;
}
}
`;

const RatingStars = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const RatingStar = styled(MdOutlineStarPurple500)`
  color: #F2CE1B;
`;

const ClientsReviewsSwiper = () => {
  return (
    <SliderContainer>
      <Swiper
        spaceBetween={15}
        slidesPerView={2}
        pagination={{ clickable: true }}
        modules={[Pagination]} 
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCard>
              <ClientInformation>
                <img src={review.client} alt="client" />
                <h4>{review.name}</h4>
              </ClientInformation>
              <ClientReview>
                <h3>{review.title}</h3>
                <p>{review.heading}</p>
                <RatingStars>
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                </RatingStars>
              </ClientReview>
            </ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default ClientsReviewsSwiper;
