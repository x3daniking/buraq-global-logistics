import React from 'react'
import { PageContainer } from '../PageStyles'
import ContactUs from '../../components/contactUs/ContactUs'
import ContactUsHeroSection from '../../components/contactUs/ContactUsHeroSection'

const ContactUsPage = () => {
  return (
    <PageContainer>
      <ContactUsHeroSection />
      <ContactUs />
    </PageContainer>
  )
}

export default ContactUsPage
