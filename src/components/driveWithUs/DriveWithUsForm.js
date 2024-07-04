import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import driveWithUsFormImage from '../../assets/images/driveWithUsFormImage.png'
import { CombinedFields, DriveWithUsContainer, DriveWithUsContent, DriveWithUsFormContainer, FormButton, FormError, FormField, Message } from './DriveWithUsStyles';

const DriveWitUsForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().matches(/^[0-9]+$/, "Limit Exceeded").required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      console.log(values);
      if (!values.honey) {
        // Process form submission
        console.log(values);
      } else {
        console.log('Spam detected');
      }
    },
  });

  return (
    <DriveWithUsContainer>
      <DriveWithUsContent>
        <img src={driveWithUsFormImage} alt='driveWithUsFormImage' />
        <DriveWithUsFormContainer onSubmit={formik.handleSubmit}>
            <CombinedFields>
              <FormField>
                <label htmlFor="firstName">First Name</label>
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
                <label htmlFor="lastName">Last Name</label>
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
                <label htmlFor="email">Email</label>
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
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="number"
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
              <label htmlFor="message">Message</label>
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
            <FormButton type="submit">Send Message</FormButton>
        </DriveWithUsFormContainer>
      </DriveWithUsContent>
    </DriveWithUsContainer>
  );
}

export default DriveWitUsForm;
