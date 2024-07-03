import React from 'react'
import AutoSwiper from '../../components/swiper/Swiper'
import { PageContainer } from '../PageStyles'
import OurServices from '../../components/ourServices/OurServices'
import WhoWeAre from '../../components/whoWeAre/WhoWeAre'
import ContactUsSection from '../../components/contactUsSection/ContactUsSection'

const Home = () => {
  return (
    <PageContainer>
      <AutoSwiper />
      <OurServices />
      <ContactUsSection />
      <WhoWeAre />
    </PageContainer>
  )
}

export default Home
