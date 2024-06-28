import React from 'react'
import { ContactUsTitle, OurServiceTitle, ServicesComponents, ServicesContainer, ServicesContainerBackground, ServicesContainerBackgroundOverly } from './ServicesStyles'
import imageUrl from '../../assets/images/servicesHero.jpg'
import OurServices from '../ourServices/OurServices'
import ClientsReviews from '../clientsreviews/ClientsReviews'
import ContactUsSection from '../contactUs/ContactUsSection'
import Footer from '../footer/Footer'

const ServicesComponent = () => {
  return (
    <ServicesContainer>
      <ServicesContainerBackground imageUrl={imageUrl}>
      </ServicesContainerBackground>
        <ServicesComponents>
          <ServicesContainerBackgroundOverly>
            <OurServiceTitle>Our Services</OurServiceTitle>
          </ServicesContainerBackgroundOverly>
          <OurServices 
            title="Here's what we offer" 
            buttonProp="true" 
          />
          <ClientsReviews />
          <ContactUsTitle>Contact Us</ContactUsTitle>
          <ContactUsSection />
          <Footer />
        </ServicesComponents>
    </ServicesContainer>
  )
}

export default ServicesComponent
