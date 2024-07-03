import React from 'react'
import MaintainanceServicesHeroSection from './MaintainanceServicesHeroSection'
import MaintenanceOurServices from './MaintenanceOurServices/MaintenanceOurServices'
import AboutUsSectionBottom from '../aboutUs/AboutUsSectionBottom'
import FeaturedWork from './featuredWork/FeaturedWork'
import ClientsReviews from './clientsreviews/ClientsReviews'
import FAQ from './faq/Faq'
import ContactUs from '../contactUs/ContactUs'

const MaintainanceServices = () => {
  return (
    <>
      <MaintainanceServicesHeroSection />
      <MaintenanceOurServices />
      <AboutUsSectionBottom />
      <FeaturedWork />
      <ClientsReviews />
      <FAQ />
      <ContactUs />
    </>
  )
}

export default MaintainanceServices
