import React from 'react'
import AutoSwiper from '../../components/swiper/Swiper'
import { PageContainer } from '../PageStyles'
import OurServices from '../../components/ourServices/OurServices'
import WhoWeAre from '../../components/whoWeAre/WhoWeAre'
import ContactUsSection from '../../components/contactUs/ContactUsSection'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <PageContainer>
      <AutoSwiper />
      <OurServices 
        title="Our Services"
      />
      <ContactUsSection />
      <WhoWeAre />
      <Footer />
    </PageContainer>
  )
}

export default Home
