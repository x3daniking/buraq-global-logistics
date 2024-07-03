import React from 'react'
import { ClientsReviewsContainer } from './ClientsReviewsStyles'
import ClientsReviewsSwiper from './ClientsReviewsSwiper'

const ClientsReviews = () => {
  return (
    <ClientsReviewsContainer>
      <h2>What Our Clients Have to Say?</h2>
      <ClientsReviewsSwiper />
    </ClientsReviewsContainer>
  )
}

export default ClientsReviews
