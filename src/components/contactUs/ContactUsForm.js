import React, {useState} from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { CombinedFields, ContactUsFormContainer, FormButton, FormError, FormField, Message } from './ContactUsStyles';

const ContactUsForm = () => {
  const [disabledButton, setDisabledButton] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      honey: '', // Honeypot field
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is Required'),
      lastName: Yup.string().required('Last Name is Required'),
      email: Yup.string().email('Invalid email address').required('Email is Required'),
      phone: Yup.string().matches(/^[0-9]+$/, 'Invalid phone number').required('Phone is Required'),
      message: Yup.string().required('Message is Required'),
      honey: Yup.string().max(0, 'Spam detected!'),
    }),
    onSubmit: async values => {
      console.log(values);
      if (!values.honey) {
        setDisabledButton(true);
      try {
        const response = await fetch('https://formspree.io/f/xgvwelgo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        
        
        if (response.ok) {
          setDisabledButton(false);
          toast.success(<div><h3>Thank you for contacting us.</h3><br />Our team will get back to you very soon!</div>, {
          className: "custom-toast",
        });
       } else {
          console.error('Form submission error');
          // Handle submission error
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle submission error
      }
      } else {
        console.log('Spam detected');
      }
    },
  });

  return (
    <ContactUsFormContainer onSubmit={formik.handleSubmit}>
      <CombinedFields>
        <FormField>
          <label htmlFor="firstName">First Name *</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <FormError>{formik.errors.firstName}</FormError>
          ) : null}
        </FormField>
        <FormField>
          <label htmlFor="lastName">Last Name *</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <FormError>{formik.errors.lastName}</FormError>
          ) : null}
        </FormField>
      </CombinedFields>
      <CombinedFields>
        <FormField>
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <FormError>{formik.errors.email}</FormError>
          ) : null}
        </FormField>
        <FormField>
          <label htmlFor="phone">Phone *</label>
          <input
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <FormError>{formik.errors.phone}</FormError>
          ) : null}
        </FormField>
      </CombinedFields>
      <FormField>
        <label htmlFor="message">Message *</label>
        <Message
          id="message"
          name="message"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <FormError>{formik.errors.message}</FormError>
        ) : null}
      </FormField>
      {/* Honeypot field */}
      <div style={{ display: 'none' }}>
        <label htmlFor="honey">Do not fill this out if you are human</label>
        <input
          id="honey"
          name="honey"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.honey}
        />
      </div>
      <FormButton type="submit" onClick={formik.handleSubmit} disabled={disabledButton}>Send Message</FormButton>
    </ContactUsFormContainer>
  );
};

export default ContactUsForm;
