import React from 'react'
import { ContactUsButton, ContactUsButtonContainer, ContactUsSectionContainer, ContactUsSectionContent } from './ContactUsSectionStyles'


const ServicesContactUs = () => {
  return (
    <ContactUsSectionContainer>
      <ContactUsSectionContent>
        <h3>Count on Buraq Global Logistics for all your fleet management needs.</h3>
        <p>For over 50 years, Buraq Global Logistics has served our customers by providing custom shipping solutions, backed by our expert in-house logistics team and experienced, professional drivers.</p>
        <p>With ever-changing regulations and requirements, keeping up with compliance can be a resource-heavy and time-consuming task. Our fleets run like well-oiled machines with the industry’s highest quality drivers and dispatchers working together to get your products where they need to go. We have an industry-leading on-time and complete percentage, so you never have to worry about meeting your shipping deadlines.</p>
        <p>At Buraq Global Logistics, we pride ourselves on providing good, reliable and trustworthy transportation services that can grow with you as your needs change.</p>
        <ContactUsButtonContainer>
        <ContactUsButton to='/contact'>Contact Us Today</ContactUsButton>
        <ContactUsButton to='/drive-with-us'>Drive With Us</ContactUsButton>
        </ContactUsButtonContainer>
      </ContactUsSectionContent>
    </ContactUsSectionContainer>
  )
}

export default ServicesContactUs

