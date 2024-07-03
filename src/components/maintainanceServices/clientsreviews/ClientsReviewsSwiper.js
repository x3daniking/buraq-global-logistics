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
  max-width: 1240px;
  

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
  border: 1px solid #000;
	border-radius: 20px;
	padding: 40px 20px;
  display: flex;
  gap: 30px; 
`;

const ClientInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

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
    height: 130px;
  }

  h5{
    color: #F2CE1B;
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
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
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
