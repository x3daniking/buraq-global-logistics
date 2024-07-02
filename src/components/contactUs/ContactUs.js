import React from 'react'
import { ContactUsIcons, ContactUsContainer, ContactUsContent, ContactUsContentLeft } from './ContactUsStyles'
import ContactUsForm from './ContactUsForm';
import phone from '../../assets/images/phone.png'
import message from '../../assets/images/message.png'


const ContactUs = () => {
  return (
    <ContactUsContainer>
      <ContactUsContent>
      <ContactUsContentLeft>
        <h1>Get In Touch</h1>
        <h2>Reach out to Our Expert Team Today</h2>
        <p>At Buraq Services, we value open communication and prompt responsiveness. We aim to exceed your expectations and build lasting relationships with our clients. Don’t hesitate to get in touch with us today.</p>
        <p>We look forward to serving you and being your trusted partner for all your trucking and towing requirements.</p>
        <h3>Contact us</h3>
        <ContactUsIcons>
          <img src={phone} alt='phone' />
          <p>(631) 565-2990</p>
        </ContactUsIcons>
        <ContactUsIcons>
          <img src={phone} alt='phone' />
          <p>(516) 244-2780</p>
        </ContactUsIcons>
      </ContactUsContentLeft>
      <ContactUsForm />
      </ContactUsContent>
    </ContactUsContainer>
  )
}

export default ContactUs
